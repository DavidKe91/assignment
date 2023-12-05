import { render } from "@testing-library/react";

import Flow from ".";

const wrapperStyle = { height: 500 };

const props = [
  {
    id: "source1",
    type: "source",
    data: {
      label: "Data Generator",
    },
    position: {
      x: 150,
      y: 250,
    },
  },
  {
    id: "manipulator1",
    type: "manipulator",
    data: {
      label: "CASE Switch Data (Start)",
    },
    position: {
      x: 350,
      y: 250,
    },
  },
  {
    id: "predictor1",
    type: "predictor",
    data: {
      label: "Cluster Assigner",
    },
    position: {
      x: 550,
      y: 250,
    },
  },
];

test("renders nodes and edges", () => {
  const { container } = render(
    <div style={wrapperStyle}>
      <Flow nodes={props} />
    </div>
  );

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const nodes = container.getElementsByClassName("react-flow__node");
  console.log(container);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const edges = container.getElementsByClassName("react-flow__edge");

  expect(nodes.length).toBe(4);
  expect(edges.length).toBe(2);
});
