import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../App.css";

const IngredientCard = ({ ingredient }) => {
  console.log(ingredient);
  return (
    <div class="ingredient-card">
      
      <Card style={{ width: "12rem" , height: "30rem"  }}>
        <Card.Img variant="top" src={ingredient.jpg}  />
        <Card.Body>
          <Card.Title>{ingredient.name}</Card.Title>
          <Card.Text>
            Categories: 
          </Card.Text>
          <div className="border border-warning">
          {ingredient.categories.map((category)=>(
              <h6>{category}</h6>))}</div>
          <Button variant="warning">Check Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IngredientCard;
