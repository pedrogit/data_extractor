import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import NamedPanel from './NamedPanel';

const fieldsSetsArr = [
  {
    value: 'None',
    label: 'None',
  },
  {
    value: 'fieldset1',
    label: 'Field Set 1',
  },
  {
    value: 'fieldset2',
    label: 'Field Set 2',
  },
];

function PredefinedFieldsSetsPanel(props) {
  const [fieldsSet, setFieldsSet] = React.useState('None');

  const handleChange = (event) => {
    setFieldsSet(event.target.value);
  };

  return (
    <NamedPanel name="Predefined Fields Sets">
       <TextField
          id="standard-select-currency-native"
          select
          defaultValue="None"
          SelectProps={{
            native: true,
          }}
          variant="filled"
          inputProps={{style: {padding: 4, backgroundColor: "white"}}}
        >
          {fieldsSetsArr.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      <Button variant="contained" size="small" sx={{marginLeft: "5px"}}>Load</Button>
    </NamedPanel>
  );
}

export default PredefinedFieldsSetsPanel;