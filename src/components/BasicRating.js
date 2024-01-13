'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function BasicRating({value,setValue}) {

    
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
       
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
       
    </Box>
  );
}