import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function FieldName(props) {
  return (
    <Stack direction="row" display="flex" sx={{width: "100%"}}>
      <TextField 
        id="filled-basic" 
        xlabel="Field Name" 
        variant="filled" 
        size="small"
        sx={{flexGrow: 2, marginRight: "2px"}}
        inputProps={{style: {padding: 5}}}
      />
    </Stack>
  );
}

export default FieldName;
