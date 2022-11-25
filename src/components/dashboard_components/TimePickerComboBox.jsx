import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function TimePickerComboBox() {
  const [min, setMin] = React.useState('');
  const [hour, setHour] = React.useState('');
  const handleChangeMin = (value) => {
    console.log('in handle change min', value);
    setHour(value);
  };
  const handleChangeHour = (value) => {
    console.log('in handle change hour', value)
    setHour(value)
  };
  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        value={min}
        onChange={(event, newValue) => {
          setMin(newValue);
        }}
        inputValue={min}
        onInputChange={(event, newInputValue) => {
          handleChangeMin(newInputValue);
        }}
        options={[15, 20, 25, 30, 35, 40, 45, 50, 55]}
        renderInput={(params) => (
          <TextField {...params} label="Minutes" value={min} />
        )}
      />
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        value={hour}
        onChange={(event, newValue) => {
          setHour(newValue);
        }}
        inputValue={hour}
        onInputChange={(event, newInputValue) => {
          handleChangeHour(newInputValue);
        }}
        options={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ]}
        renderInput={(params) => (
          <TextField {...params} label="Hours" value={hour} />
        )}
      />
    </>
  );
}
