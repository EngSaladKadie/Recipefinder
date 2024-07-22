import React, { useState } from 'react' 
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
// Importing Firebase authentication instance
import { auth } from './firebase'; // Importing Firebase method for creating a new user
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpFrom = () => {
    const [email, setEmail]= useState();  // State for storing the email input
    const [passward, setPassword]= useState(); // State for storing the password input


    const handleSubmit= async(e)=>{
        // Prevent the default form submission behavior
        e.preventDefault()
        try{
            // createWithEmailPassword(auth, email,passward)
           await createUserWithEmailAndPassword(auth, email ,passward)
            console.log("account created");// Logging success message
            
            

        }catch(error){
            console.log(error); // Logging any error that occurs
        }

    }

  return (
    <div className='SignUp-container'>
       <form className='Signup-form ' onSubmit={handleSubmit}>
       <h2 className=''>Sign Up</h2>
        <label htmlFor='email' >
            Email:
            <input className='w-full p-20 mt-5 mb-10 border-r-4' type='email' onChange={(e)=> setEmail(e.target.value)} placeholder='Email.com'/>
            

        </label>
        <label htmlFor='email'>
            Passward:
            <input className='w-full p-20 mt-5 mb-10 border-r-4' type='Password' onChange={(e)=> setPassword(e.target.value)} placeholder='Password'  />

        </label>
          <button type='submit' className='bg-green-300 text-white py-10 px-10 cursor-pointer border-r-4'>Sign Up</button>
          <p>already Registered? <Link to="/login">login</Link></p>

       </form>
      
    </div>
  )
}

export default SignUpFrom;
