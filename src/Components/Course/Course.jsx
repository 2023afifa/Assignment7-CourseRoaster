import PropTypes from 'prop-types';

const Course = ({ course, handleAddCourse }) => {
    const { cover, title, description, price, credit } = course;

    return (
        <div className="bg-white p-4 rounded-xl">
            <img src={cover} alt={`Cover picture of the ${title}`} />
            <h3 className="text-lg font-bold mt-5">{title}</h3>
            <p className="text-sm text-neutral-500">{description}</p>
            <div className="flex justify-between my-4">
                <img src="../../../Asset/dollar-sign 1.png" alt="" /><p>Price: {price}</p>
                <img src="../../../Asset/Frame.png" alt="" /><p>Credit: {credit} hr</p>
            </div>
            <button onClick={() => handleAddCourse(course)} className="bg-blue-500 text-white p-1 rounded-lg w-full">Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func,
}

export default Course;