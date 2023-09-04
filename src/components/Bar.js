import React, { useEffect, useState } from "react";
import { Box ,Button,Radio,Stack,TextField,InputAdornment,Input,FormControl,InputLabel} from '@mui/material';

const Bar = ({formData,setFormData}) => {
   
       
  return (
    <div className="bar">
        <FormControl fullWidth sx={{ m: 1, width: '340px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: '340px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    value={formData.price} onChange={(e)=>setFormData({...formData, price: e.target.value})} />
         </FormControl>        
        <div className="range-div">
            <input className="range"  type="range" min="10000" max="1000000" step="100" value={formData.price} onChange={(e)=>setFormData({...formData, price: e.target.value})} />
        </div>
    </div>
  )
}

export default Bar