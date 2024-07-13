import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  return (
    <Box className={` ${props.custom ? props.custom : 'grey w-full 2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-2/3'} mb-2`}>
      <FormControl fullWidth>
        <InputLabel id="select">{props.label}</InputLabel>
        <Select
         sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
            '& .MuiInputBase-input': {
              color:'rgb(203 213 225)',
              fontSize:'small',
              letterSpacing: 0.1,
              paddingLeft:'10px',
              opacity: 1, // Ensure the placeholder color is applied
            },
            background:"transparent"
          }}
          labelId="select"
          id="demo-simple-select"
          fullWidth 
          size="small"
          {...props}
          variant="outlined" 
        >
         {props.children}
        </Select>
      </FormControl>
    </Box>
  );
}
