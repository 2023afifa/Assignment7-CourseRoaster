import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Credits from './Components/Credits/Credits'
import Header from './Components/Header/Header'

function App() {
  const [courses, setCourses] = useState([]);

  const handleAddCourse = course => {
    const newCourses = [...courses, course];
    setCourses(newCourses);
  }

  return (
    <>

      <Header></Header>
      <div className='flex gap-6 max-w-7xl mx-auto'>
        <Courses handleAddCourse={handleAddCourse}></Courses>
        <Credits courses={courses}></Credits>
      </div>

    </>
  )
}

export default App
