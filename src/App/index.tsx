import { useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "./App.css";
import { Input } from "../components/Input";

import { NodeOption } from "../interfaces/nodeOption";
import Flow from "../components/Flow";
import { defaultNodes } from "../data/defaultNodes";
import { Node } from "reactflow";

function App() {
  const [newNode, setNewNode] = useState<any | null>();
  const [nodes, setNodes] = useState(() => {
    const savedNodes = localStorage.getItem("nodes");

    if (savedNodes) {
      return JSON.parse(savedNodes);
    } else {
      return defaultNodes;
    }
  });

  const handleNodeSelect = (data: NodeOption[]) => {
    if (data && data[0]) {
      const updatedNode = [data[0]];
      setNewNode(updatedNode);
    }
  };

  const handleAddedNode = (data: NodeOption[]) => {
    setNewNode("");
    setNodes([...nodes, data]);
  };

  useEffect(() => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
  }, [nodes]);

  console.log(nodes);

  const options: NodeOption[] = [
    {
      type: "Source",
      id: "source",
    },
    {
      type: "Manipulator",
      id: "manipulator",
    },
    {
      type: "Predictor",
      id: "predictor",
    },
  ];
  console.log(
    <Flow nodes={nodes} newNode={newNode} handleAddedNode={handleAddedNode} />
  );

  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(211, 210, 229)" }}>
      <header className="App-header">Knime Assignment</header>
      <div className="input-wrapper">
        <Input handleNodeSelect={handleNodeSelect} options={options} />
      </div>
      <Flow nodes={nodes} newNode={newNode} handleAddedNode={handleAddedNode} />
    </div>
  );
}

export default App;
