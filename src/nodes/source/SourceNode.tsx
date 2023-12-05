import { memo } from "react";
import { Handle, Position } from "reactflow";
import "./source-node.css";

export default memo(() => {
  return (
    <div className="source-node">
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 5, background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="25"
        height="25"
      >
        <rect width="25" height="25" fill="#FE9400FF"></rect>
      </svg>
      <div>Source</div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 0, top: "auto", background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </div>
  );
});
