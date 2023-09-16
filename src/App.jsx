import { useState } from 'react';
import './App.css';
import Courses from './Components/Courses/Courses';
import Credits from './Components/Credits/Credits';
import Header from './Components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleAddCourse = course => {
    const isExist = courses.find((item) => item.id == course.id);
    let count = course.credit;

    if (isExist) {
      return toast("You can't add courses more than once");
    }
    else {
      courses.forEach((item) => {
        count = count + item.credit;
      })
      const remaining = 20 - count;

      if (remaining < 0) {
        return toast("You have exceed the limit");
      }
      else {
        setRemainingCredit(remaining);
        const newCourses = [...courses, course];
        setCourses(newCourses);
      }
    }
  }

  const handleCreditHour = credit => {
    const newCreditHour = creditHour + credit;

    if (newCreditHour > 20) {
      return toast("You can't add more than 20 credits");
    }
    setCreditHour(newCreditHour);
  }

  return (
    <>

      <Header></Header>
      <div className='flex gap-6 max-w-7xl mx-auto'>
        <Courses handleAddCourse={handleAddCourse} handleCreditHour={handleCreditHour}></Courses>
        <Credits courses={courses} creditHour={creditHour} remainingCredit={remainingCredit}></Credits>
        <ToastContainer />
      </div>

    </>
  )
}

export default App
