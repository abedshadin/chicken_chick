
import PropTypes from 'prop-types';

Counter.propTypes = {
    wantCook: PropTypes.array.isRequired
};

function Counter({wantCook}) {
    return (
        <div>
        <div>Want to cook: {wantCook.length} </div>
        <div>Currently</div>
        
    </div>
    );
}

export default Counter;