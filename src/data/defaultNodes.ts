import { Node } from "reactflow";

export const defaultNodes: Node[] = [
  {
    id: "source1",
    type: "source",
    data: { label: "Data Generator" },
    position: { x: 150, y: 250 },
  },
  {
    id: "manipulator1",
    type: "manipulator",
    data: { label: "CASE Switch Data (Start)" },
    position: { x: 350, y: 250 },
  },
  {
    id: "predictor1",
    type: "predictor",
    data: { label: "Cluster Assigner" },
    position: { x: 550, y: 250 },
  },
];
