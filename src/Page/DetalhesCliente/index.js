import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClientes from "../../Services/apiClientes"

function DetalhesCliente() {
    const {id} = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {

        async function loadingUsers () {
            await apiClientes.get("/users", {
                params: {
                    limit: 100
                }
            })
            .then((response) => {
                setUser(response.data.users)
            })
        }
        loadingUsers ()
    }, [id])
    console.log(user)

    
    return(
        <div>
            {user.map((item) => (
                <p key={item.id}>{item.firstName}</p>
            ))}
           
         </div>




    )
}

export default DetalhesCliente