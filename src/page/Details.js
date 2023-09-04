import React, { useState } from 'react';
import logo from '../img/logo.png';
import group from '../img/Group 482.png';
import quote from '../img/Quote.png';
import { Box ,Stack,TextField} from '@mui/material';
import Country from '../components/Country';
import Telephone from '../components/Telephone';
import { useNavigate } from 'react-router-dom';

const Details = ({formData,setFormData}) => {
    const navigate = useNavigate();
   
  return (
    <div className='from-body'>
    <div className='form-l'>
        <div className='header-l-1'><img src={logo} alt='' /></div>
        <div className='header-l-2'><img src={group} alt='' /></div>
        <div className='header-l-3'><img src={quote} alt='' /></div>
    </div>
    <div className='form-r'>
        <div className='top-r-header'>
            <div className='header-r'>STEP 1 OF 3</div>
            <div className='header-r'>Lost or have trouble? <span>Get help</span></div>
        </div>
        <div className='contat'>
            <div className='contact-1'>Contact details</div>
            <div className='contact-2'>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</div>
        </div>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '340px' },}} sm={{'& .MuiTextField-root': { m: 1, width: '300px' },}}>
            <div className='input'>      
                <TextField  
                id="standard-basic" 
                label="Full name" 
                variant="standard" 
                type='text' 
                value={formData.name} 
                onChange={(e)=>setFormData({ ...formData, name: e.target.value})}                     
                />
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <Telephone className='tele-3' formData={formData} setFormData={setFormData}  />   
            </div>
        </Box>
        <div className='t'>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '700px' },}} >
            <div className='input2'>      
                <TextField  
                id="standard-basic" 
                label="E-mail address" 
                variant="standard" 
                type='email' 
                value={formData.email} 
                onChange={(e)=>setFormData({...formData, email: e.target.value})} 
                />
                <Country name='country' formData={formData} setFormData={setFormData}  />
            </div>
        </Box>
        </div>
        <div className='privacy'>
            <div className='privacy-header'>Privacy policy</div>
            <div className='privacy-des'>We know you care about how your personal information is used and shared, so we take your privacy seriously</div>
            <div className='privacy-expand'>Expand privacy policy</div>
        </div>
        <div className='btn'>
            <button className='btn-one'>Back to the homepage</button>
            <div className='btn-group'>
                <button className='grop-one' onClick={()=> navigate('/two')}>Skip for now</button>
                <button className='grop-two' onClick={()=> navigate('/two')} >Next step</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Details