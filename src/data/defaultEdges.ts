import { Edge } from "reactflow";

export const defaultEdges: Edge[] = [
  { id: "esource1-manipulator1", source: "source1", target: "manipulator1" },
  {
    id: "emanipulator1-predictor1",
    source: "manipulator1",
    target: "predictor1",
  },
];
