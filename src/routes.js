import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./page/Home"
import PainelAdm from "./page/PainelAdm"
function RoutesApp () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/painelAdm" element={<PainelAdm/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp