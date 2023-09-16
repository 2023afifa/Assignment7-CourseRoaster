import Course from "../Course/Course";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";


const Courses = ({handleAddCourse, handleCreditHour}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-5 w-3/4 mb-20">
        
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleAddCourse={handleAddCourse}
                    handleCreditHour={handleCreditHour}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddCourse: PropTypes.func,
    handleCreditHour: PropTypes.func,
}

export default Courses;