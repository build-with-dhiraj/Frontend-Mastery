const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
}

const sources = readJson("sources/sources.json");
const evidence = readJson("evidence/evidence.json");
const stackFrequency = readJson("evidence/stack-frequency.json");
const standards = readJson("standards/standards.json");
const stack = readJson("skeleton/default-stack.json");
const components = readJson("skeleton/component-specs.json");
const motions = readJson("skeleton/motion-specs.json");

const errors = [];

function fail(message) {
  errors.push(message);
}

const sourceIds = new Set(sources.sources.map((source) => source.id));
const evidenceIds = new Set(evidence.claims.map((claim) => claim.id));
const standardIds = new Set(standards.standards.map((standard) => standard.id));
const motionIds = new Set(motions.motion.map((motion) => motion.id));

for (const claim of evidence.claims) {
  if (!sourceIds.has(claim.sourceId)) {
    fail(`Evidence ${claim.id} references missing source ${claim.sourceId}`);
  }
  if (!claim.claim || !claim.sourceClass || !claim.confidence || !claim.risk) {
    fail(`Evidence ${claim.id} is missing claim/sourceClass/confidence/risk`);
  }
}

for (const standard of standards.standards) {
  for (const field of ["id", "name", "type", "tier", "score", "layer"]) {
    if (standard[field] === undefined || standard[field] === "") {
      fail(`Standard ${standard.id || "(missing id)"} is missing ${field}`);
    }
  }
  if (!Array.isArray(standard.evidenceIds) || standard.evidenceIds.length === 0) {
    fail(`Standard ${standard.id} has no evidenceIds`);
  } else {
    for (const id of standard.evidenceIds) {
      if (!evidenceIds.has(id)) fail(`Standard ${standard.id} references missing evidence ${id}`);
    }
  }
  if (!Array.isArray(standard.sourceClasses) || standard.sourceClasses.length === 0) {
    fail(`Standard ${standard.id} has no sourceClasses`);
  }
  if (!Array.isArray(standard.risks) || !Array.isArray(standard.useWhen) || !Array.isArray(standard.avoidWhen)) {
    fail(`Standard ${standard.id} must include risks, useWhen, and avoidWhen arrays`);
  }
}

const interactionIds = new Map();
const minimumStates = components.rules.stateMinimum;

for (const component of components.components) {
  if (interactionIds.has(component.interactionId)) {
    fail(
      `Duplicate interactionId ${component.interactionId} in ${interactionIds.get(
        component.interactionId,
      )} and ${component.id}`,
    );
  }
  interactionIds.set(component.interactionId, component.id);

  for (const id of component.standardIds) {
    if (!standardIds.has(id)) fail(`Component ${component.id} references missing standard ${id}`);
  }
  for (const id of component.motionIds || []) {
    if (!motionIds.has(id)) fail(`Component ${component.id} references missing motion ${id}`);
  }
  for (const state of minimumStates) {
    if (!component.states.includes(state)) {
      fail(`Component ${component.id} is missing required state ${state}`);
    }
  }
}

for (const motion of motions.motion) {
  if (!motion.id || !motion.easing || motion.durationMs === undefined || !motion.reducedMotion) {
    fail(`Motion ${motion.id || "(missing id)"} must include id, durationMs, easing, and reducedMotion`);
  }
  for (const id of motion.standardIds) {
    if (!standardIds.has(id)) fail(`Motion ${motion.id} references missing standard ${id}`);
  }
}

function validateStackPackage(groupName, entries) {
  for (const entry of entries || []) {
    if (!entry.package || !entry.reason || !Array.isArray(entry.standardIds)) {
      fail(`Stack entry in ${groupName} is missing package/reason/standardIds`);
      continue;
    }
    for (const id of entry.standardIds) {
      if (!standardIds.has(id)) fail(`Stack entry ${entry.package} references missing standard ${id}`);
    }
  }
}

for (const [groupName, entries] of Object.entries(stack.install)) {
  if (Array.isArray(entries)) validateStackPackage(groupName, entries);
}
validateStackPackage("notDefault", stack.notDefault);

if (sources.xPolicy.status !== "public_or_provided_only") {
  fail("X policy must be explicit and public_or_provided_only for V1");
}

if (!Array.isArray(stackFrequency.rows) || stackFrequency.rows.length < 25) {
  fail("Stack frequency table must include at least 25 rows");
} else {
  const stackIds = new Set();
  for (const row of stackFrequency.rows) {
    if (stackIds.has(row.id)) fail(`Duplicate stack-frequency row id ${row.id}`);
    stackIds.add(row.id);
    if (!row.url || !row.sourceType || !Array.isArray(row.stack) || row.stack.length === 0) {
      fail(`Stack-frequency row ${row.id} is missing url/sourceType/stack`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Corpus validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Corpus validation passed.");
console.log(`Sources: ${sources.sources.length}`);
console.log(`Evidence claims: ${evidence.claims.length}`);
console.log(`Standards: ${standards.standards.length}`);
console.log(`Components: ${components.components.length}`);
console.log(`Motion specs: ${motions.motion.length}`);
console.log(`Stack-frequency rows: ${stackFrequency.rows.length}`);
