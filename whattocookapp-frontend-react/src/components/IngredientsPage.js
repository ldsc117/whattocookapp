import React from 'react';
import ingredients from '../ingredients.json';


export default function IngredientsPage() {

    const ingredientList = ingredients;
    
    console.log(ingredientList);
    return (
        <div>
            <h1>Ingredients ingred</h1>
            <div className="ingredients-card-container">
            
            </div>
        </div>
    )
}
