import React from "react";
import Recipe from "./Recipe"
import uuid from 'uuid'
import {Link} from 'react-router-dom';
function RecipeList(props){

const onClick = () => {
    props.setFound(true);
    props.setQuery('chicken');
    props.history.push('/');
}

    if(props.recipeFound == true)
    return(
        props.recipes. map((recipe) => {
            return(
                <Recipe className = "recipe"  key = {uuid.v4()} title = 
                {recipe.recipe.label} image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients}/>

            ) 
        })
       
    )
    else{
        return (
            <div>
                <h1 className = "Display-1 container text-center" style ={{marginTop: '40px'}}>
                    We're sorry, no recipes were found with the ingredient you entered. Please enter a different ingredient.
                </h1>
                <div className = " text-center">
               <button className = "btn btn-lg btn-primary" style ={{marginTop: '30px'}} onClick = {onClick}>Back</button>
               </div>
            </div>
        )
    }

}

export default RecipeList







