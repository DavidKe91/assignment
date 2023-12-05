import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { defaultNodes } from "../../data/defaultNodes";

export const Input = (props: any) => {
  const [selected, setSelected] = useState([{ id: "", type: "" }]);

  function handleSelect(option: any) {
    setSelected(option);
    props.handleNodeSelect(option);
  }

  return (
    <Typeahead
      id="node-input"
      clearButton
      defaultSelected={defaultNodes.slice(0, 1)}
      onChange={handleSelect}
      labelKey={`type`}
      options={props.options}
      placeholder="Add a new node..."
      selected={selected}
    />
  );
};
