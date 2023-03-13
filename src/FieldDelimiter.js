import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function FieldDelimiter({typePreceding = true}) {
  return (
    <Stack direction="row" display="flex" sx={{width: "100%"}}>
      <TextField 
        id="filled-basic" 
        placeholder={(true ? "Preceding" : "Following") + " Regex Delimiter"} 
        variant="filled" 
        size="small"
        sx={{flexGrow: 2, marginRight: "2px"}}
        inputProps={{style: {padding: 5}}}
      />
    </Stack>
  );
}

export default FieldDelimiter;