import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import FieldName from './FieldName';
import FieldDelimiter from './FieldDelimiter';
import EditableLabel from "./EditableLabel";

function FieldRow(props) {
  const [text, setText] = React.useState("Click here to edit.");

  return (
    <Stack direction="column" display="flex">
      <EditableLabel
        initialValue="field1"
        xonFocus={(value) => console.log("on focus: ", value)}
        xonBlur={(value) => {
          //console.log("on blur: ", value);
          setText(value || "default value");
        }} />
      <Stack direction="row" display="flex" sx={{ width: "100%" }}>
        <FieldDelimiter type="start"/>
        <FieldDelimiter type="end"/>
      </Stack>
    </Stack>
  );
}

export default FieldRow;