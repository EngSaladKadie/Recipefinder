import React, { useState, useEffect } from 'react'; // Importing necessary modules from React
import { useParams } from 'react-router-dom'; // Importing useParams for extracting URL parameters

const MealInfo = () => {
  const { mealid } = useParams(); // Extracting meal ID from URL parameters
  const [info, setInfo] = useState(null); // State for storing the meal information

  // useEffect hook to fetch meal information when the component mounts or mealid changes
  useEffect(() => {
    const getInfo = async () => {
      try {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json(); // Fetching data from the meal API based on meal ID
        setInfo(jsonData.meals[0]); // Updating the info state with fetched meal data
      } catch (error) {
        console.error("Error fetching meal info:", error); // Handling errors
      }
    };

    if (mealid) {
      getInfo(); // Calling getInfo function if mealid exists
    }
  }, [mealid]);

  return (
    <div>
      {!info ? "Data Not Found" :
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className='info'>
            <h1>Recipe details</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
            <h2>Category</h2>
            <p>{info.strCategory}</p>
            <h2>Area</h2>
            <p>{info.strArea}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default MealInfo;
