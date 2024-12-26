
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
Counter.propTypes = {
    wantCook: PropTypes.array.isRequired,
    removeRecipe: PropTypes.func.isRequired
};

function Counter({wantCook,removeRecipe}) {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const handleCurrentlyCooking = (recipe) => {
        const exists = currentlyCooking.some((item) => item.recipe_id === recipe.recipe_id);
        if (exists) {
            toast("Recipe is already added to the list.");
        } else {
           
            setCurrentlyCooking([...currentlyCooking, recipe]);
            removeRecipe(recipe);
        }
    }
    
    // Calculate the total time
    const totalTime = currentlyCooking.reduce(
        (total, recipe) => total + parseInt(recipe.preparing_time, 10),
        0
    );

    // Calculate total calories
    const totalCalories = currentlyCooking.reduce(
        (total, recipe) => total + parseInt(recipe.calories, 10),
        0
    );
    return (
        <div>
              <ToastContainer />
        <div>Want to cook: {wantCook.length} </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>


        {wantCook.map((recipe, idx) => (
            <tr key={idx}>
                <th>{idx+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} calories</td>
                <td><button className='btn  ' onClick={()=>handleCurrentlyCooking(recipe)}>Preparing</button></td>
            </tr>
        ))}
      
     
      
    </tbody>
  </table>
</div>
        <div>Currently</div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>

      </tr>
    </thead>
    <tbody>


        {currentlyCooking.map((recipe, idx) => (
            <tr key={idx}>
                <th>{idx+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} min</td>
                <td>{recipe.calories} calories</td>
               
            </tr>
        ))}
      
     
      
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th>Total Time = {totalTime} </th>
        <th>Total Calories = {totalCalories}</th>

      </tr>
    </tfoot>
  </table>
</div>
    </div>
    );
}

export default Counter;