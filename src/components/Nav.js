import React from 'react';
import  { Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate =useNavigate();
    const logout = ()=>{
       localStorage.clear();
       navigate('/signup')
    }
    return (
        <div>
           <img alt="logo" className = 'logo' src='https://th.bing.com/th/id/OIP._n7pJblBIP4UKTnOGepvmQHaFj?rs=1&pid=ImgDetMain'/>
        { auth ? <ul className="nav-ul">
          
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add product</Link></li>
            <li><Link to="/update">Update product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to ="/signup">Logout  ({JSON.parse(auth).name})</Link></li>
            </ul>
                : <ul  className="nav-ul nav-right"> 
                <li><Link to="/signup">Sign up </Link> </li>
            <li><Link to = "/login">Login</Link></li>
                
        
        </ul>
        }
        </div>
    )
}
 

export default Nav; 