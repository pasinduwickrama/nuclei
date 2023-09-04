import React from 'react'
import logo from '../img/logo.png';
import group from '../img/Group 483.png';
import quote from '../img/Quote.png';
import { Box ,Button,Radio,Stack,TextField,RadioGroup,FormLabel,FormControl, FormControlLabel} from '@mui/material';
import Bar from '../components/Bar';
import { useNavigate } from 'react-router-dom';



const Investment = ({formData,setFormData}) => {
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
            <div className='header-r'>STEP 2 OF 3</div>
            <div className='header-r'>Lost or have trouble? <span>Get help</span></div>
        </div>
        <div className='contat'>
            <div className='contact-1'>Investment plans</div>
            <div className='contact-2'>Let us know about your investment plans. This will help us get you to the right expert who will help you further</div>
        </div>  
        <div className='Plans'>
            <div className='Plans-header'>Ho much are you planning to invest in this year?</div>
        </div>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '340px' },}}>
            <div className='input3'>                     
               
            </div>
            <div>
                <Bar  formData={formData} setFormData={setFormData} />
            </div>
        </Box>
        <div className='yes'>
            <div className='yes-header'>Are you an accredited investor?</div>
            <div className='yes-button'>
            <FormControl>
                <RadioGroup 
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group" >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" className='b' onChange={(e)=>{setFormData({ ...formData, yes: e.target.value})}} />
                    <FormControlLabel  value="No" control={<Radio />} label="No" className='b1'  onChange={(e)=>{setFormData({ ...formData, no: e.target.value})}} />
                </RadioGroup>
            </FormControl>             
               
            </div>
             {/* <button className='btn-4'><Radio   name="radio-buttons"  />No</button> */}
        </div>
        <div className='btn'>
            <button className='btn-one' onClick={()=> navigate('/')}>Back to the previous step</button>
            <div className='btn-group'>
                <button className='grop-one'onClick={()=> navigate('/three')}>Skip for now</button>
                <button className='grop-two'onClick={()=> navigate('/three')}>Next step</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Investment