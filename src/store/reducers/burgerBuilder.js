import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 0.7,
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSte = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedSte);
}

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
        building: false,
    });
}

const fetchIngredientFailed = (state, action) => {
    return updateObject(state, {
        error: true
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENTS: return removeIngredient(state, action);
        case actionType.SET_INGREDIENTS: return setIngredient(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredientFailed(state, action);
        default: {
            return state;
        }
    }
}

export default reducer;