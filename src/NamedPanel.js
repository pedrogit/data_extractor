import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

function NamedPanel(props) {
  return (
    <Box sx={{padding: '5px', backgroundColor: 'secondary.main', ...props.sx}}>
      <Typography><b>{props.name}</b></Typography>
      {props.children}
    </Box>
  );
}

export default NamedPanel;