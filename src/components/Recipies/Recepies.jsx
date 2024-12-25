import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipies = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => { 
        fetch("../../../public/recipes.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data));
    }   , []);
    console.log(recipes);
    return (
        <div>
           {recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
        </div>
    );
};

export default Recipies;