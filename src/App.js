import React, {useEffect, useState, component} from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import './App.css';

function App() {
  const APP_ID = '7a12f12b';
  const APP_KEY = '00f66af07ddb7243c1750effce0bf42f';


  const [search, setSearch] = useState();
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);
  const [found, setFound] = useState(true);
  useEffect(() => {          
    getRecipes();             
  }, [query]);


  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const getRecipes = async () => {
    try{
      const response = await fetch(req);
      const data = await response.json();
      setRecipes(data.hits);
      if(data.hits.length == 0){
        setFound(false);
      }
    }catch(err){
      console.error(err);
    }
  
  
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    document.getElementById('searchField').value = '';
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className = "banner">
          <h1 className = "Display-1 text-center" style = {{color: 'white', paddingTop: '30px', fontStyle: 'italic', fontSize: '70px'}}>React Recipe</h1>
          <form onSubmit = {getSearch} className = 'form-group form-inline justify-content-center'>
            <input className = 'form-control searchbox' id = "searchField" onChange = {updateSearch} required/>
            <button className = 'btn btn-primary' style = {{margin:'15px'}}>Search</button>
          </form>
        </div>
        <div className = "row justify-content-center" >
          <Switch>
            <Route exact path = "/" render = {(props) => (<RecipeList {...props} recipes = {recipes} recipeFound = {found} setFound = {setFound} setQuery = {setQuery}/>)} />
            <Route path = "/:title" render = {(props) => (<RecipeDetails {...props} recipes = {recipes}/>)} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
