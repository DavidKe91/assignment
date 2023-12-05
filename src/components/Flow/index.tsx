import { useCallback, useEffect } from "react";
import ReactFlow, { Node, ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "./index.css";
import { defaultEdges } from "../../data/defaultEdges";

import SourceNode from "../../nodes/source/SourceNode";
import ManipulatorNode from "../../nodes/manipulator/ManipulatorNode";
import PredictorNode from "../../nodes/predictor/PredictorNode";
import { NodeOption } from "../../interfaces/nodeOption";

const edgeOptions = {
  animated: true,
};

const nodeTypes = {
  source: SourceNode,
  manipulator: ManipulatorNode,
  predictor: PredictorNode,
};

const connectionLineStyle = { stroke: "grey" };

let nodeId = 1;

interface FlowProps {
  handleAddedNode: (newNode: Node) => void;
  newNode: NodeOption[] | undefined;
  nodes: Node[];
}

function Flow(props: FlowProps) {
  const reactFlowInstance = useReactFlow();

  const addNode = useCallback(
    (data: NodeOption[]) => {
      let result = Object.assign({}, {}, ...data);
      const id = `${++nodeId}`;
      const newNode = {
        id: `${result.type.toLowerCase()}${id}`,
        type: result.id,
        position: {
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        },
        data: {
          label: `${result.type} ${id}`,
        },
      };
      reactFlowInstance.addNodes(newNode);
      props.handleAddedNode(newNode);
    },
    [reactFlowInstance, props]
  );

  useEffect(() => {
    console.log(props.newNode);
    if (props.newNode) {
      addNode(props.newNode);
    }
  }, [addNode, props.newNode]);

  return (
    <ReactFlow
      defaultNodes={props.nodes}
      defaultEdges={defaultEdges}
      defaultEdgeOptions={edgeOptions}
      fitView
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
    />
  );
}

function FlowWithProvider(props: any) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

console.log(FlowWithProvider);

export default FlowWithProvider;
