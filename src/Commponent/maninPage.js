import React, { useState } from 'react' // Importing necessary modules from React
import MealCard from './mealCard';  // Importing the MealCard component
import SignUpFrom from '../SignUpFrom'; // Importing the SignUpFrom component
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const ManinPage = () => {
    const [data, setData ]= useState(); // State for storing the fetched meal data
    const [search, setSearch]= useState();  // State for storing the search input
    const [msg, setMSG]= useState(""); // State for storing the message

    // handleInput

    const handleInput= (event)=>{
        setSearch(event.target.value) // Updating the search state with input value
    }
 // Function to fetch meal data based on search input
   const myfun = async ()=>{
     if(search == ""){
        setMSG("please enter Something")  // Setting message if search input is empty
     }
     else{
                    // Fetching data from the meal API based on search input
        const get = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();  // Updating the data state with fetched meal data
        
       
        setData(jsonData.meals)
    }
       

    }
   

  return (
    <>
    <div>
    <h1 className='head'>FOOD RECIPE APP</h1>
   <div className='container' >
    
     <div className='searchBar '>
         <input type='text' placeholder='enter dishe'onChange={handleInput} />
         <button onClick={myfun}>search</button>
         <Link to="/signup">
          <button className='btn-primry px-3 py-2'> SignUp</button>
         </Link>
      </div>
     
       
      

     
     <h4>{msg}</h4>
       
     <div>
        <MealCard detail= {data} />
      </div>

     

      

   </div>
   </div> 

  
   </>
  )
}

export default ManinPage
