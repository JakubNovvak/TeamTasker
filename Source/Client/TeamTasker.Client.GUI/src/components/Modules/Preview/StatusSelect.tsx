import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CheckLeaderPermission from '../../Connection/API/CheckLeaderPermission';

export default function StatusSelect() {
  const [age, setAge] = React.useState('10');

  const [userPermission, setUserPermission] = React.useState<boolean>(false);
  CheckLeaderPermission(setUserPermission);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 230, ml: "1.5rem", mt: "1rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
          disabled={userPermission ? false : true}
          
        >
          <MenuItem value={10}>✅ On the right path</MenuItem>
          <MenuItem value={20}>⏺ On hold</MenuItem>
          <MenuItem value={30}>🟪 Finished</MenuItem>
          <MenuItem value={40}>❌Critically off the path</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}