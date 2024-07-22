import React, { useState } from 'react'; // Importing necessary modules from React
import MealCard from './mealCard';  // Importing the MealCard component
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const MainPage = () => {
  const [data, setData] = useState(null); // State for storing the fetched meal data
  const [search, setSearch] = useState(""); // State for storing the search input
  const [msg, setMSG] = useState(""); // State for storing the message

  // Function to handle input changes
  const handleInput = (event) => {
    setSearch(event.target.value); // Updating the search state with input value
  };

  // Function to fetch meal data based on search input
  const myfun = async () => {
    if (search === "") {
      setMSG("Please enter something"); // Setting message if search input is empty
    } else {
      try {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json(); // Fetching data from the meal API based on search input
        setData(jsonData.meals); // Updating the data state with fetched meal data
        setMSG(""); // Clear message after successful data fetch
      } catch (error) {
        console.error("Error fetching meal data:", error); // Handling errors
        setMSG("Error fetching data");
      }
    }
  };

  return (
    <div>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
          <input type='text' placeholder='Enter dish' onChange={handleInput} />
          <button onClick={myfun}>Search</button>
          <Link to="/signup">
            <button className='btn-primary px-3 py-2'>SignUp</button>
          </Link>
        </div>
        <h4>{msg}</h4>
        {data && <MealCard detail={data} />}
      </div>
    </div>
  );
};

export default MainPage;
