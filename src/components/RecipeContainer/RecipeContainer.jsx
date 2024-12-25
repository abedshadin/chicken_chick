import Recipies from "../Recipies/Recepies";

const RecipeContainer = () => {
    return (
        <div className="container mx-auto">
            <h1 className="mt-16 text-4xl">Our Recipes</h1>

            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
                <div className="w-2/3"><Recipies /></div>
                <div className="w-1/3">Cooking</div>
                
            </div>
        </div>
    );
};

export default RecipeContainer;