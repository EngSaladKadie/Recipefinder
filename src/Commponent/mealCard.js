import React from 'react'; // Importing necessary modules from React
import { NavLink } from 'react-router-dom'; // Importing NavLink for navigation

const MealCard = ({ detail }) => {
  if (!detail) {
    return <p>No meals found</p>; // Handling case where detail is not provided
  }

  return (
    <div className='meals'>
      {detail.map((curItem) => (
        <div key={curItem.idMeal} className='mealImg'>
          <img src={curItem.strMealThumb} alt={curItem.strMeal} />
          <p>{curItem.strMeal}</p>
          <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
        </div>
      ))}
    </div>
  );
};

export default MealCard;
