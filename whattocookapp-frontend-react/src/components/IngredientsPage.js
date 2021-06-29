import React, { useState, useEffect } from "react";
import ingredients from '../ingredients.json';
import CardColumns from 'react-bootstrap/CardColumns'
import IngredientCard from './IngredientCard';
import "../App.css";

export default function IngredientsPage() {

    const [ingredientList,setIngredientList] = useState();
    useEffect(() => {
        setIngredientList(ingredients);
      }, []);
    
    console.log(ingredientList);
    return (
        <div>
            <h1>Ingredients</h1>
            <div className="card-container">
            {ingredientList && ingredientList.map((ingredient) => (
                <IngredientCard ingredient={ingredient}/>  
            ))}
            </div>
            

            
        </div>
    )
}
