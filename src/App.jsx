import './App.css'
import Header from './components/header/Header'
import LeftSideBar from './container/leftSideBar/LeftSideBar'
import RightSideBar from './container/rightsidebar/RightSideBar'

function App() {

  return (
    <>
    <div className='portfolio__header-main'>
        <Header />
      </div>
     
    <div className='portfolio__main app__bg'>
      
        <LeftSideBar />
        <RightSideBar />
    
     
    </div>

    </>
  )
}

export default App
