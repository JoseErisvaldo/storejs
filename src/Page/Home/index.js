import { Link } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import Search from "../../Components/Search"
function Home () { 
    return( 
        <div className="container'">
            <Search/>
            <NavBar/>
        </div>

    )
}

export default Home