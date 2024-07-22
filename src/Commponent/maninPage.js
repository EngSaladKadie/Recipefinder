import React, { useState } from 'react'
import MealCard from './mealCard';
import SignUpFrom from '../SignUpFrom';
import { Link } from 'react-router-dom';

const ManinPage = () => {
    const [data, setData ]= useState();
    const [search, setSearch]= useState();
    const [msg, setMSG]= useState("");

    const handleInput= (event)=>{
        setSearch(event.target.value)
    }

   const myfun = async ()=>{
    if(search == ""){
        setMSG("please enter Something")
    }
    else{
        const get = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData =await get.json();
        
       
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
