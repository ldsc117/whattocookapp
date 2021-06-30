import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../App.css";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div class="recipe-card">
      
      <Card style={{ width: "16rem" , height: "35rem"  }}>
        <Card.Img variant="top" src={recipe.jpg}  />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>
            Ingredients: 
          </Card.Text>
          <div className="border border-warning">
          {recipe.ingredients.map((ingredient)=>{
            for(const [key, value] of Object.entries(ingredient)){
                return <h6>{key}</h6>
            }
             })}</div>
            <Card.Title>Description</Card.Title>
            <Card.Text>
           {recipe.description}
          </Card.Text>
          <Button variant="success">Check Recipe</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
