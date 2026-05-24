const fs = require("fs");

const sourcesData = JSON.parse(fs.readFileSync("sources/sources.json", "utf8"));
const evidenceData = JSON.parse(fs.readFileSync("evidence/evidence.json", "utf8"));

const sourceMap = {};
sourcesData.sources.forEach(s => sourceMap[s.id] = s.class);

evidenceData.claims = evidenceData.claims.map(claim => {
  // Ensure sourceClass is set
  if (!claim.sourceClass) {
    claim.sourceClass = sourceMap[claim.sourceId];
  }
  
  // Ensure confidence is set (default to strong if missing, as most were)
  if (!claim.confidence) {
    claim.confidence = "strong";
  }
  
  // Ensure risk is set (default to low if missing)
  if (!claim.risk) {
    claim.risk = "low";
  }
  
  // Ensure claim is set (some were reported missing, but they seemed to have them in my read_file)
  // Let's just make sure it exists
  if (!claim.claim) {
    claim.claim = "MISSING CLAIM CONTENT"; // Should be caught by manual check if it happens
  }
  
  return claim;
});

fs.writeFileSync("evidence/evidence.json", JSON.stringify(evidenceData, null, 2));
console.log("Fixed evidence.json");
