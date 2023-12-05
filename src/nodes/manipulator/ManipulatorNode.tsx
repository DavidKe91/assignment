import { memo } from "react";
import { Handle, Position } from "reactflow";
import "./manipulator-node.css";

export default memo(() => {
  return (
    <div className="manipulator-node">
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: "50%", background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        width="25"
        height="25"
      >
        <rect width="25" height="25" fill="#FED800FF"></rect>
      </svg>
      <div>Manipulator</div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 10, background: "black" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </div>
  );
});
