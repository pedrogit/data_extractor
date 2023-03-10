import React from "react";
import Typography from "@mui/material/Typography";

function NamedPanel(props) {
  return (
    <div style={{padding: '5px'}}>
      <Typography><b>{props.name}</b></Typography>
      {props.children}
    </div>
  );
}

export default NamedPanel;