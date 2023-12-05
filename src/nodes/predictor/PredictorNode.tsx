import { memo } from "react";
import { Handle, Position } from "reactflow";
import "./predictor-node.css";

export default memo(() => {
  return (
    <div className="predictor-node">
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 5, background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        style={{ bottom: 0, top: "auto", background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="25"
        height="25"
      >
        <rect
          width="25"
          height="25"
          fill="
#43B804FF"
        ></rect>
      </svg>
      <div>Predictor</div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: "50%", background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </div>
  );
});
