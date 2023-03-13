import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FieldName from './FieldName';
import FieldDelimiter from './FieldDelimiter';

function FieldRow(props) {
  return (
    <Stack direction="column" display="flex">
      <Stack direction="row" display="flex" justifyContent="space-between">
        <FieldName name="field1" />
        <Button variant="contained" size="small" sx={{marginBottom: "5px"}}>Add Field</Button>
      </Stack>
      <Stack direction="row" display="flex" spacing={1}>
        <FieldDelimiter type="start"/>
        <FieldDelimiter type="end" />
      </Stack>
    </Stack>
  );
}

export default FieldRow;