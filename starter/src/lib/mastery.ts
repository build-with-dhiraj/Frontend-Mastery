import standardsData from "@/data/standards.json";
import componentSpecsData from "@/data/component-specs.json";
import motionSpecsData from "@/data/motion-specs.json";

export interface Standard {
  id: string;
  name: string;
  type: string;
  layer: string;
  tier: string;
  score: number;
  sourceClasses: string[];
  evidenceIds: string[];
  risks: string[];
  useWhen: string[];
  avoidWhen: string[];
}

export interface ComponentSpec {
  id: string;
  interactionId: string;
  standardIds: string[];
  layer: string;
  purpose: string;
  states: string[];
  motionIds: string[];
  visual: string;
}

export const getStandards = () => standardsData.standards as Standard[];
export const getComponentSpecs = () => componentSpecsData.components as ComponentSpec[];

export const getStandardById = (id: string) => 
  getStandards().find(s => s.id === id);

export const getSpecsForStandard = (standardId: string) =>
  getComponentSpecs().filter(spec => spec.standardIds.includes(standardId));
