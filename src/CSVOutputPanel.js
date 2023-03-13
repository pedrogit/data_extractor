import React from "react";
import NamedPanel from './NamedPanel';
import CodeMirror from '@uiw/react-codemirror';

function FieldDefPanel(props) {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <NamedPanel name="CSV Output" sx={{height: "calc(100vh - 452px)"}}>
      <CodeMirror
        value="console.log('hello world!');"
        height="100%"
        onChange={onChange}
      />
    </NamedPanel>
  );
}

export default FieldDefPanel;