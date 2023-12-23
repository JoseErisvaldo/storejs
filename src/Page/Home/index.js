import { Link } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import Catalogo from "../../Components/Catalogo"
import Destaque from "../../Components/Destaque"
function Home () { 
    return( 
        <div className="container'">
            <NavBar/>
            <Destaque/>
            <Catalogo/> 
        </div>

    )
}

export default Home