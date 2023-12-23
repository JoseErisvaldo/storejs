
import axios from "axios";

const apiClientes = axios.create({
    baseURL:'https://dummyjson.com'
})

export default apiClientes