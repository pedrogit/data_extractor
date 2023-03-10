import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function FieldRow(props) {
  return (
    <Stack direction="row" display="flex" sx={{width: "100%"}}>
      <TextField 
        id="filled-basic" 
        label="Field Name" 
        variant="filled" 
        size="small"
        sx={{flexGrow: 1, marginRight: "2px"}}
      />
      <TextField 
        id="filled-basic" 
        label="Regex Preceding Delimiter" 
        variant="filled" 
        size="small"
        sx={{flexGrow: 2, marginRight: "2px"}}
      />
      <TextField 
        id="filled-basic"
        label="Regex Following Delimiter"
        variant="filled"
        size="small"
        sx={{flexGrow: 2, marginRight: "2px"}}
      />
    </Stack>
  );
}

export default FieldRow;