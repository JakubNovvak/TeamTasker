import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CheckLeaderPermission from '../../Connection/API/CheckLeaderPermission';
import { useEffect } from 'react';

export default function StatusSelect({projectStatus}: {projectStatus: string}) {
  const [age, setAge] = React.useState("OnTheRightPath");

  const [leaderPermission, setLeaderPermission] = React.useState<boolean>(false);
  CheckLeaderPermission(setLeaderPermission);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    setAge(projectStatus);
  }, []);

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
          disabled={leaderPermission ? false : true}
          
        >
          <MenuItem value={"OnTheRightPath"}>✅ On the right path</MenuItem>
          <MenuItem value={"OnHold"}>⏺ On hold</MenuItem>
          <MenuItem value={"Finished"}>🟪 Finished</MenuItem>
          <MenuItem value={"CriticallyOffThePath"}>❌Critically off the path</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}