import { Link } from "react-router-dom"
function NavBar () {
    return (
        <div>
            <ul>
                <li>
                    <Link to={"/"}> Eletroportáteis </Link>
                </li>   
                <li>
                    <Link to={"/"}> Telefonia </Link>
                </li>     
                <li>
                    <Link to={"/"}> Jardim </Link>
                </li> 
            </ul>
        </div>
    )
}
export default NavBar