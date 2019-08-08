import React from 'react'
import {Link} from 'react-router-dom'

const Recipe = (props) => {
    const {title, image, ingredients, uri} = props;
    return (
        <div className="card col-sm-6 col-md-3" style = {{margin: '15px 20px 15px 20px'}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Link to={'/'+title} className="btn btn-primary">Recipe</Link>
            </div>
        </div>
    )
}

export default Recipe
