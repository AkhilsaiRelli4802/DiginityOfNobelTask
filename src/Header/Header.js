import { NavLink,nav } from "react-router-dom";
import Button from "./Button/Button";
import "./Header.css";
import { BrowserRouter } from 'react-router-dom'
function Header(){
    return(
        
        <div className="navbarposition">
            <div className="HeaderContainer1">
                <div className="continer">
                    <img className="Headerlogo" src="https://dignityofnoble.org/logo/logo2.png" alt="Header logo"/>
                </div>

            <nav>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="firstpart">
                        <nav>
                        <NavLink to="/Home" className="navLink"><h1 className="clickabledetails">Home</h1></NavLink>
                        <NavLink to = "/About" className="navLink"><h1 className="clickabledetails">About</h1></NavLink>
                        <NavLink to="/Volunteer" className="navLink"><h1 className="clickabledetails">Volunteers</h1></NavLink>
                        <NavLink to = "/Articles" className="navLink"><h1 className="clickabledetails">Article</h1></NavLink>
                        <NavLink to="/Contact" className="navLink"><h1 className="clickabledetails">Contact Us</h1></NavLink>
                        <NavLink to = "/FAQ" className="navLink"><h1 className="clickabledetails">FAQ</h1></NavLink>
                        </nav>
                        
                    </div>
                    {/* <div><Button color="primary" className="NavButton">Lets Connect</Button></div> */}
                    <div>
                        <Button/>
                    </div>
                </div>
            </nav>
                </div>
        </div>
    )
}
export default Header