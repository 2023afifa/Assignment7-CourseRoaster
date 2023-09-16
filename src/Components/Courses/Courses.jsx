import Course from "../Course/Course";
import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-5 w-3/4 mb-20">
            {/* <h2 className="text-3xl font-semibold">Courses</h2> */}
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;