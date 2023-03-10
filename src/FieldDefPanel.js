import React from "react";
import NamedPanel from './NamedPanel';
import FieldRow from './FieldRow';

function FieldDefPanel(props) {
  return (
    <NamedPanel name="Fields Definitions">
      <FieldRow/>
    </NamedPanel>
  );
}

export default FieldDefPanel;