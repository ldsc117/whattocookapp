import React, { useState, useEffect } from "react";
import ingredients from "../ingredients.json";
import recipes from "../recipes.json";
import RecipeCard from "./RecipeCard";
import FormCheck from "react-bootstrap/FormCheck";

const AppPage = () => {
  const [checkedIngredientList, setCheckedIngredientList] = useState([]);
  const [ingredientList, setIngredientList] = useState();
  useEffect(() => {
    setIngredientList(ingredients);
  }, []);

  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    const newList = [];
    
    for (const [id,recipe] of Object.entries(recipes)) {
      console.log("yeah1")
      
      for(const [stringName,recipeValue] of Object.entries(recipe)){
          if(stringName==="ingredients"){
             for( const[ingredientId,ingredientValue] of Object.entries(recipeValue)){
                 for( const[ingredientName,ingredientDescription] of Object.entries(ingredientValue)){
                     console.log(ingredientName);
                    if(checkedIngredientList.includes(ingredientName)){
                        if(newList.length>0){
                           for(const [newListId,newListValue] of Object.entries(newList)){
                               if(id!=newListId){
                                newList.push(recipes[id]);
                               }
                           }
                        }
                        else{newList.push(recipes[id])}
                    }
                 }
             }   
          }
      }
      
    }
    setRecipeList(newList);
  }, [checkedIngredientList]);
  function handleCheckChange(event) {
    var ingredient = event.target.value;

    if (checkedIngredientList.includes(ingredient)) {
      const newList = checkedIngredientList.filter((com) => com !== ingredient);
      setCheckedIngredientList(newList);
    } else {
      setCheckedIngredientList([...checkedIngredientList, ingredient]);
      console.log(ingredient);
    }
  }
  console.log(checkedIngredientList);

  console.log(recipeList);
  console.log(recipes);
  return (
    <div>
      <h1>App</h1>
      <h1>Recipes</h1>
      <div className="card-container-app-recipes">
        {recipeList && recipeList.length>0 ? recipeList.map((recipe) => (
                <RecipeCard recipe={recipe}/>  
            ))
            :<h1>No Recipes for this ingredient</h1>}
        
      </div>
      <br />
      <br />
      <br />
      <h1>Ingredients</h1>
      <div className="card-container-app-ingredients">
        {ingredientList &&
          ingredientList.map((ingredient) => (
            <FormCheck
              style={{ padding: "20px" }}
              label={ingredient.name}
              value={ingredient.name.split(" ")[0]}
              onChange={handleCheckChange}
              type="checkbox"
            />
          ))}
      </div>
    </div>
  );
};

export default AppPage;
