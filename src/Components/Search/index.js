import "./style.css"
import { Link } from "react-router-dom"
function Search () {
    return(
        <div className="container-search">
            <div className="nav">
                <div> <Link  className="logo" to={'/'} >JS.STORE</Link> </div>
                <div className="nav-dados">
                    <div><i class='bx bx-cart-download'></i></div>
                    <div> <Link to={'/painelAdm'}> <i class='bx bxs-folder-open'></i> </Link></div>
                    <div><i class='bx bxs-user' ></i></div>
                </div>
            </div>
        </div>
    )
}

export default Search