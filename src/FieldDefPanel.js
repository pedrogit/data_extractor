import React from "react";
import NamedPanel from './NamedPanel';
import Stack from '@mui/material/Stack';
import FieldRow from './FieldRow';
import Button from '@mui/material/Button';

function FieldDefPanel(props) {
  return (
    <NamedPanel name="Fields Definitions">
      <FieldRow />
      <Stack direction="row" display="flex" justifyContent="space-between" sx={{marginTop: "5px"}}>
        <Stack direction="row" display="flex" spacing={1}>
          <Button variant="contained" size="small">Export Field Definition</Button>
          <Button variant="contained" size="small">Import Field Definition</Button>
        </Stack>
        <Button variant="contained" size="small">Add Field</Button>
      </Stack>
    </NamedPanel>
  );
}

export default FieldDefPanel;