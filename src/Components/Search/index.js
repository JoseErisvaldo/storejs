import "./style.css"
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
            </ul>
        </div>
    )
}

export default Search