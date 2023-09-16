import PropTypes from 'prop-types';
import Credit from '../Credit/Credit';

const Credits = ({courses}) => {
    return (
        <div className="w-1/4 bg-white p-5 rounded-lg h-1/2">
            <h2 className='text-blue-500 text-lg font-bold'>Credit Hour Remaining: </h2>
            <hr className='my-5'/>
            <h2 className="text-xl font-bold my-4">Course Name</h2>
            {
                courses.map((credit) => <Credit key={credit.id} credit={credit}></Credit>)
            }
            <hr className='my-5'/>

            <h3>Total Credit Hour: </h3>
        </div>
    );
};

Credits.propTypes = {
    courses: PropTypes.array
}

export default Credits;