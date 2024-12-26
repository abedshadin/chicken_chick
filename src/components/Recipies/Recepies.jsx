import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
const Recipies = ({handleWantCook}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => { 
        fetch("../../../public/recipes.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }   , []);
 
    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
  {recipes.map((recipe, idx) => (
    <Recipe key={idx} recipe={recipe} handleWantCook={handleWantCook} />
  ))}
</div>

    );
};
Recipies.propTypes = {
    handleWantCook: PropTypes.func.isRequired
};
export default Recipies;