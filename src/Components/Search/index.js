import "./style.css"
import { Link } from "react-router-dom"
function Search () {
    return(
        <div className="container-search">
            <ul>
                <li>Logo</li>
                <li>
                    <input type="search"/>
                    <i class='bx bx-search'></i>
                </li>
                <li><i class='bx bx-cart-download'></i></li>
                <li> <Link to={'/painelAdm'}> <i class='bx bxs-folder-open'></i> </Link></li>
            </ul>
        </div>
    )
}

export default Search