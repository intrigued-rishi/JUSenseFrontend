import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const NavBar=()=>{
    const navigate=useNavigate()
   
    return(
        <nav>
            <div className="nav-wrapper black">
                <Link to={'/showAll'} className="brand-logo left" style={{marginLeft:"10px"}}>show all</Link>
            </div>
        </nav>
    )
}

export default NavBar;