import { Link } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import Search from "../../Components/Search"
import Catalogo from "../../Components/Catalogo"
function Home () { 
    return( 
        <div className="container'">
            <Search/>
            <NavBar/>
            <Catalogo/> 
        </div>

    )
}

export default Home