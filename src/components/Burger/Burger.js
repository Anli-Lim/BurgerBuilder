import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;