import React from 'react'
import NavBar from './components/Navbar'
// import Home from './components/Home'
import ShowAll from './components/ShowAll' 
import Verifier from './components/Verifier' 
// import './App.css'
// import './index.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>       
        <NavBar />
        <Routes>
          {/* <Route exact path='/' element={<Home />}></Route> */}
          <Route exact path='/showAll' element={<ShowAll />}></Route>
          <Route exact path='/upload' element={<Verifier />}></Route>
        </Routes>
      </BrowserRouter> 
    </>         
  );
}

export default App;
