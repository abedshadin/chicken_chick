import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Counter from "../Counter/Counter";
import Recipies from "../Recipies/Recepies";
const RecipeContainer = () => {
    const [wantCook, setWantCook] = useState([]);

  const removeRecipe = (recipe) => {

    const updatedWantCook = wantCook.filter((item) => item.recipe_id !== recipe.recipe_id);
 
    setWantCook(updatedWantCook);
};
    const handleWantCook = (recipe) => {
        const exists = wantCook.some((item) => item.recipe_id === recipe.recipe_id); 
    
        if (exists) {
            toast("Recipe is already added to the list.");
        } else {
          setWantCook([...wantCook, recipe]); 
        }
      };
    
    return (
        <div className="container mx-auto">
            <h1 className="mt-16 text-4xl">Our Recipes</h1>

            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div className="flex flex-col md:flex-row gap-2 mt-8">
  <div className="w-full md:w-2/3"> {/* For mobile, take full width, on medium screens and up, 2/3 width */}
    <Recipies handleWantCook={handleWantCook} />
  </div>
  <div className="w-full md:w-1/3"> {/* For mobile, take full width, on medium screens and up, 1/3 width */}
    <Counter wantCook={wantCook} removeRecipe={removeRecipe} />
  </div>
</div>

            <ToastContainer />
        </div>
    );
};

export default RecipeContainer;