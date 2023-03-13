import React from "react";
import EditableLabel from "./EditableLabel";

function FieldName({name = "field1"}) {
  const [text, setText] = React.useState("Click here to edit.");

  return (
    <EditableLabel
      initialValue={name}
      xonFocus={(value) => console.log("on focus: ", value)}
      xonBlur={(value) => {
      //console.log("on blur: ", value);
      setText(value || "default value");
    }} />
  );
}

export default FieldName;
