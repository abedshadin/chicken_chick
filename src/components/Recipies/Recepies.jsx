import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';
const Recipies = ({handleWantCook}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => { 
        fetch("../../../public/recipes.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }   , []);
    console.log(recipes);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
           {recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} handleWantCook={handleWantCook} />)}
        </div>
    );
};
Recipies.propTypes = {
    handleWantCook: PropTypes.func.isRequired
};
export default Recipies;