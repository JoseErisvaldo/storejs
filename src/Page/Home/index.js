import { Link } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import Catalogo from "../../Components/Catalogo"
function Home () { 
    return( 
        <div className="container'">
            <NavBar/>
            <Catalogo/> 
        </div>

    )
}

export default Home