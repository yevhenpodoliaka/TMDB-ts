
import { FiLogIn } from 'react-icons/fi';
import {useState} from 'react'
import {  NavLink } from "react-router-dom"

const AuthNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    
  return (
      <div  style={{display:"flex", position:"relative"}}>
          <FiLogIn onClick={() => setIsOpen(!isOpen)} style={{color:"blue"}} />
            { isOpen && <nav style={{position:"absolute",left:"24px"}}>
                            <NavLink className="navLink" to="login">Login</NavLink>
                            <NavLink className="navLink" to="register">Register</NavLink>
                        </nav>}
      </div>
  )
}

export default AuthNav
