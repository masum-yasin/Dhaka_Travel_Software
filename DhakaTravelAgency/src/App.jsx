

import './App.css'
import TravelAgency from './component/Travel/TravelAgency'
import Footer from './component/Travel/Footer'
import NavBar from './component/Travel/NavBar'

function App() {
  

  return (
    <>
    
  <div className="max-w-screen-xl">
    <NavBar></NavBar>
  <TravelAgency></TravelAgency>
  <Footer></Footer>
  </div>
    </>
  )
}

export default App
