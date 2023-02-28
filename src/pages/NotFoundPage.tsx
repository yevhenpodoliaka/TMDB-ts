import { Link } from "react-router-dom"
import poster from "../images/not-found.jpg"

const  NotFoundPage=() =>{
    return <div style={{  width: "100%",
  height: "100%",
  backgroundImage: `url(${poster})`,
  backgroundSize: "contain",
  backgroundPosition: "cover",
  backgroundRepeat: "no-repeat",
  textAlign: "center",}}>
        <h1>404 Page Not Found !!!</h1>
        <Link to={'/'} style={{}}>Go Home Page</Link>
    </div>
}

export default NotFoundPage