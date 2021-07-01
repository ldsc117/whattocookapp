import recipes from "../recipes.json";
import React, { useState, useEffect } from "react";

const RecipePage = ({ match }) => {
  const recipe = recipes.find((r) => r.id == match.params.id);

  console.log(recipe);
  return (
    <div>
      <h1>Recipe {match.params.id}</h1>
      <div className="recipe-page-container">
        <h1>{recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1)}</h1>
        <div className="recipe-page-container-upper">
          <div className="container-upper-image">
            <img src={recipe.jpg}></img>
          </div>
          <div className="container-upper-info">
            <text>{recipe.description}</text> <br />
            <text>Calories:</text>
            <text>{" " + recipe.calories}</text>
            <br />
            <text>Cooking Time:</text>
            <text>{" " + recipe.cookingTimeMinutes + " minutes"}</text>
            <br />
            <br />
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                for (const [key, value] of Object.entries(ingredient)) {
                  return <li>{value}</li>;
                }
              })}
            </ul>
          </div>
        </div>
        <div className="recipe-directions">
          <h3>Recipe Directions:</h3>
          <br />
          <ol>
            {recipe.directions.map((line) => (
              <li>{line}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
