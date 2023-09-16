import './App.css'
import Courses from './Components/Courses/Courses'
import Credits from './Components/Credits/Credits'
import Header from './Components/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='flex gap-6 max-w-7xl mx-auto'>
        <Courses></Courses>
        <Credits></Credits>
      </div>

    </>
  )
}

export default App
