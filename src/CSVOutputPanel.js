import React from "react";
import NamedPanel from './NamedPanel';
import CodeMirror from '@uiw/react-codemirror';

function FieldDefPanel(props) {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <NamedPanel name="CSV Output">
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        onChange={onChange}
      />
    </NamedPanel>
  );
}

export default FieldDefPanel;