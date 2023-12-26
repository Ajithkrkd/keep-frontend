import React, { useState } from "react";
import "../SignUpFolder/SignUp.css";
import axios from 'axios'
function SignUp() {

 //state ->  formdata for registration
 const [formData, setFormData] = useState({
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
  });
  
  //state ->  Indicating the error
  const [errors , setErrors] = useState({});




  // when ever user try to make any changes in the input ,
  //i will handle the change here so also checking the validation
  const handleChange =(e)=>{
    const {name ,value} = e.target;
    setFormData({...formData ,[name]: value});
    
    //for setting the error 
    setErrors({...errors , [name] :''});
    if (name === 'firstName') {
      if (!value.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'First name cannot be empty' }));
      } else if (value.length < 7 || value.length > 15) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'First name must be between 7 and 15 characters' }));
      }
    }
    if (name === 'lastName') {
      if (!value.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Last name cannot be empty' }));
      } else if (value.length < 2 || value.length > 15) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Last name must be between 2 and 15 characters' }));
      }
    }
    else if (name === 'email') {
      if (!value.trim()) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Email cannot be empty' }));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Enter a valid email address (example@gmail.com)' }));
      }
    }
      else if (name === 'password') {
        if (!value.trim()) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: ' password cannot be empty' }));
        } else if (value.length < 8 || value.length > 15) {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: 'password must be between 8 and 15 characters' }));
        }
      }
       if (name === 'confirmPassword') {
        if(value === formData.password){
          setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
        else if (value != formData.confirmPassword) {
          console.log(formData.password , formData.confirmPassword)
          setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Passwords do not match' }));
        } 
      }
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(errors).some((error) => error !== '')){
      console.log(errors)
      console.log('error is there')
      return;
    }
    try {
      const response = await axios.post('http://localhost:9000/api/auth/register', formData);
      if (response.status === 200) {
          console.log(response,"hai here is the response")
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  
  };

  return (
    <div className="mainDiv row d-flex">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet" 
      ></link>
      <form className="col-6 ">
        <h4 className="form-header mb-2 ">Register</h4>
       
       
        <div class="form-group">
          <input
            type="email"  
            className={`form-control my-2 ${errors.firstName ? 'is-invalid' : ''}`}
            placeholder="first name"
            name="firstName" value={formData.firstName} onChange={handleChange}
          />
        </div>
        {errors.firstName && <div className="" style={{color:'red'}}>{errors.firstName}</div>}
       
       
        <div class="form-group">
          <input
            type="lastName"
            className={`form-control my-2 ${errors.lastName ? 'is-invalid' : ''}`}
            placeholder="Last name"
            name="lastName" value={formData.lastName} onChange={handleChange}
          />
        </div>
        {errors.lastName && <div className="" style={{color:'red'}}>{errors.lastName}</div>}
       
        <div class="form-group">
          <input type="email"
          className={`form-control my-2 ${errors.email ? 'is-invalid' : ''}`}
           name="email" value={formData.email} onChange={handleChange}
           placeholder="Email" />
        </div>
        {errors.email && <div className="" style={{color:'red'}}>{errors.email}</div>}
       
       
       
        <div class="form-group">
          <input type="password" 
           className={`form-control my-2 ${errors.password ? 'is-invalid' : ''}`}
           name="password" value={formData.password} onChange={handleChange}
           placeholder="Password" />
        </div>
           {errors.password && <div className="" style={{color:'red'}}>{errors.password}</div>}
        
        <div class="form-group mt-2">
          <input type="password" 
            className={`form-control my-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
            name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
            placeholder="confirmPassword" />
        </div>
            {errors.confirmPassword && <div className="" style={{color:'red'}}>{errors.confirmPassword}</div>}
        
        <button type="submit" 
        onClick={handleSubmit}
        className={`btn w-100 my-3 ${!!Object.values(errors).find((error) => error !== '') ? 'btn-primary' : 'btn-success'}`}
          disabled={!!Object.values(errors).find((error) => error !== '')}>
          Register
        </button>

        <button type="submit" class="btn btn-dark w-100">
          <i className="bx bxl-google mx-2" style={{ color: "#fff" }} /> GOOGLE
        </button>
      </form>
    </div>
  );
}

export default SignUp;
