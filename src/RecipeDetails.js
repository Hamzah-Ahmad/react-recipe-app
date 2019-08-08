import React from 'react'
import uuid from 'uuid'
import {Link} from 'react-router-dom'

const RecipeDetails = (props) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    var recipe = props.recipes.filter(recipe => recipe.recipe.label == props.match.params.title)[0];
    return (
        <div className = "container">
        <h3 className = "Display-3 dishName" style = {{textAlign:'center', fontSize: '60px', fontStyle: 'italic'}}>
            {recipe.recipe.label}
        </h3>
        <hr/>
        <div className = "row">
        <div className = "col-sm-12 col-md-5 offset-md-1">
        <Link to='/' className = "btn btn-primary text-left" >Back</Link>
        </div>
        </div>
        <div className = "row" style = {{marginTop: '30px'}}>
            <div className = "col-sm-12 col-md-5 offset-md-1">

                <h3 className = "Display-3">Ingredients:</h3>
                <ul className = "list-group" key = {uuid.v4()}>
                    {recipe.recipe.ingredients.map(ingredient => {
                        return(
                            <li class="list-group-item">{ingredient.text}</li>
                        )
                    })}

                </ul>
            </div>
            <div className = "col-sm-12 col-md-3 offset-md-1" >
                <img  src = {recipe.recipe.image} style ={{width: '350px', marginTop: '40px'}}/>
            </div>
        </div>
        </div>
    )
}

export default RecipeDetails
