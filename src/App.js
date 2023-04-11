import React from 'react'
import NavBar from './components/Navbar'
// import Home from './components/Home'
import ShowAll from './components/ShowAll' 
import Verifier from './components/Verifier' 
import Search from './components/Search' 
import ChartDisplay from './components/Chart'
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
          <Route exact path="/chart" element={<ChartDisplay />}></Route>
          <Route exact path='/showAll' element={<ShowAll />}></Route>
          <Route exact path='/uploadData' element={<Verifier />}></Route>
          <Route exact path='/searchData' element={<Search />}></Route>
        </Routes>
      </BrowserRouter> 
    </>         
  );
}

export default App;
