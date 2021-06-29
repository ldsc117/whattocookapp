const initialState = {
    ingredients: [],
  }
  export const ActionTypes = {
    SET_INGREDIENTS: 'SET_INGREDIENTS',
    
  }

  export const ActionCreators = {
    setIngredients: payload => ({ type: ActionTypes.SET_INGREDIENTS, payload }),
    
  }



  export default function IngredientReducer(state = initialState, action) {  
    switch (action.type) {
      case ActionTypes.SET_INGREDIENTS:
        return {...state, ingredients: [...action.payload]};
      default:
        return state;
      
    }
  }