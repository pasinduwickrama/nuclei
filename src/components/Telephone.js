import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ReactCountryFlag from "react-country-flag"
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const Telephone = ({formData,setFormData}) => {
 
  return (
    <div className='telephone'>
    <Box  id="standard-basic"  sx={{'& .MuiTextField-root': { m: 3, width: '50px' },}}>
    <TextField
          id="standard-basic"
          select
          variant="standard"
          defaultValue="US"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
        <Box id="standard-basic"  sx={{'& .MuiTextField-root': { m: 3, width: '270px' },}}>
        <TextField  
        id="standard-basic"  
        variant="standard" 
        className='tele' 
        type='number' 
        name='telephone' 
        value={formData.tele} 
        onChange={(e)=>setFormData({ ...formData, tele: e.target.value})} />
        </Box>

        </div>
  )
}

export default Telephone


const currencies = [
    {
      value: 'US',
      label: <ReactCountryFlag countryCode="US" svg />,
    },
    {
      value: 'AD',
      label: <ReactCountryFlag countryCode="AD" svg />,
    },
    {
      value: 'UA',
      label: <ReactCountryFlag countryCode="UA" svg />,
    },
    {
      value: 'CA',
      label: <ReactCountryFlag countryCode="CA" svg />,
    },
  ];