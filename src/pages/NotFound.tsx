import { Link } from "react-router-dom"
export default function NotFound() {
    return <div className="notFoundPage">
        <h1>404  NotFound !!!</h1>
        <Link to={'/'}>Go Home Page</Link>
    </div>
}