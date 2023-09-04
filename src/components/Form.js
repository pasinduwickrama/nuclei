import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Details from '../page/Details'
import Investment from '../page/Investment'
import Preferences from '../page/Preferences'

const Form = () => {
    const [formData,setFormData] = useState({
        name:"",
        tele:"",
        email:"",
        country:"",
        price:"",
        yes:"",
        no:"",
        family:"",
        multifamily:"",
        retail:"",
        industrial:"",
        hospitality:"",
        warehousing:"",
        office:"",
        other:"",
    })

    const handleRegistra = () => {
        localStorage.setItem('registrationData', JSON.stringify(formData));
        alert('Registration successful! Data saved to localStorage.');
    }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Details formData={formData} setFormData={setFormData}  />} />
      <Route path='/two' element={<Investment formData={formData} setFormData={setFormData} />} />
      <Route path='/three' element={ <Preferences formData={formData} setFormData={setFormData} handleRegistra={handleRegistra} />} />
    </Routes>       
  </BrowserRouter>
  )
}

export default Form