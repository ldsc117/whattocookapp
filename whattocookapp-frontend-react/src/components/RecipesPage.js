import React, { useState, useEffect } from "react";
import recipes from '../recipes.json';
import RecipeCard from './RecipeCard';
import "../App.css";

const RecipesPage = () => {
    const [recipeList,setRecipeList] = useState();
    useEffect(() => {
        setRecipeList(recipes);
      }, []);
    
    console.log(recipes);
    return (
        <div>
            <h1>Recipes</h1>
            <div className="card-container">
            {recipeList && recipeList.map((recipe) => (
                <RecipeCard recipe={recipe}/>  
            ))}
            </div>
            


        </div>
    )
}

export default RecipesPage;

