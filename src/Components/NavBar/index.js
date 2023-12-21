import { Link, useParams } from "react-router-dom"
import "./style.css"
import api from "../../Services/Apis"
import { useEffect, useState } from "react"



function NavBar () {
    const [category, setCategory] = useState([])

    useEffect(() => {

        async function LoadingCategory () {
            await api.get('/products/categories')
            .then((response) => {
                setCategory(response.data)
            })
        }
        LoadingCategory ()
    }, [])
    return (
        <div className="container-nav-bar">
            <ul>
                {category.map((item) => (
                    <li>
                        <Link className="link" to={`/categorias/${item}`}> {item} </Link>
                    </li>  
                ))} 
            </ul>  
        </div>
    )
}
export default NavBar