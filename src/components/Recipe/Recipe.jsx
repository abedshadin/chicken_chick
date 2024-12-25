
import PropTypes from 'prop-types';
import { CiTimer  } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import './Recipe.css';
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantCook: PropTypes.func.isRequired
};

function Recipe({recipe, handleWantCook}) {
    const { recipe_id,recipe_image,recipe_name,short_description,ingredients,preparing_time,calories } = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='w-full h-48 object-cover'
      src={recipe_image}
      alt={recipe_name} />
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <div>
    <p>Ingredients: {ingredients.length}</p>
    <ul className="list-disc ">
        {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
    </ul>
    </div>
    <div className='flex justify-between'>
        <span className='flex'><CiTimer /> &nbsp; {preparing_time} min</span>
        <span className='flex'><FaFire /> &nbsp; {calories} calories</span>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleWantCook(recipe_id)} className="btn btn-primary">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default Recipe;