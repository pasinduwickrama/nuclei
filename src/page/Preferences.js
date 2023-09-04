import React from 'react'
import logo from '../img/logo.png';
import group from '../img/Group 484.png';
import quote from '../img/Quote.png';
import { Box ,Button,Radio,Stack,TextField,RadioGroup,FormGroup,Checkbox, FormControlLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Preferences = ({formData,setFormData,handleRegistra}) => {
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
            <div className='header-r'>STEP 3 OF 3</div>
            <div className='header-r'>Lost or have trouble? <span>Get help</span></div>
        </div>
        <div className='contat'>
            <div className='contact-1'>Investment preferences</div>
            <div className='contact-2'>This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals</div>
        </div>  
        <div className='Plans'>
            <div className='Plans-header'>What kind of real estate are you interested in?</div>
        </div>
        <div className='chak-group'>
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unselectable=''Checked />} value='family' onChange={(e) => { setFormData({ ...formData, family: e.target.value})}}  />
                    <label className='label'>Single family</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='multifamily'  onChange={(e) => { setFormData({ ...formData, multifamily: e.target.value})}}  />
                    <label className='label'>Residential multifamily</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='retail'  onChange={(e) => { setFormData({ ...formData, retail: e.target.value})}}  />
                    <label className='label'>Commercial retail</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='industrial' onChange={(e) => { setFormData({ ...formData, industrial: e.target.value})}}  />
                    <label className='label'>Commercial industrial</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='hospitality' onChange={(e) => { setFormData({ ...formData, hospitality: e.target.value})}}  />
                    <label className='label'>Commercial hospitality</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='warehousing' onChange={(e) => { setFormData({ ...formData, warehousing: e.target.value})}}  />
                    <label className='label'>Commercial warehousing</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='office' onChange={(e) => { setFormData({ ...formData, office: e.target.value})}}  />
                    <label className='label'>Commercial office</label>
                </div>   
                <div className='chak-box'>
                    <FormControlLabel control={<Checkbox unChecked />} value='other'  onChange={(e) => { setFormData({ ...formData, other: e.target.value})}} />
                    <label className='label'>Other</label>
                </div>   
        </div>
        
        <div className='btn'>
            <button className='btn-one' onClick={()=> navigate('/two')}>Back to the previous step</button>
            <div className='btn-group'>
                <button className='grop-one'onClick={handleRegistra}>Skip for now</button>
                <button className='grop-two' onClick={handleRegistra} >Finish</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Preferences