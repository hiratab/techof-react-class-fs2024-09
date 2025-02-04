import { useState } from 'react';

import { Box, Slider, Button, TextField, Tooltip } from '@mui/material';

function Exercise21() {
  const [valueFromSlide, setValueFromSlide] = useState(0);

  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Slider
          size="small"
          value={valueFromSlide}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(event) => {
            setValueFromSlide(event.target.value);
          }}
        />
        <Slider
          value={valueFromSlide}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={(event) => {
            setValueFromSlide(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: 300 }}>
        <Tooltip title="Delete">
          <Button
            variant="contained"
            color='error'
            onClick={() => {
              alert('Delete')
            }}
          >
            Delete
          </Button>
        </Tooltip>
      </Box>
      <Box sx={{ width: 300, marginTop: '1em' }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </Box>


      <Box sx={{ width: 300, marginTop: '1em' }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          disabled
        />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          value={address}
          disabled
        />
      </Box>
    </div>
  )
}

export default Exercise21;