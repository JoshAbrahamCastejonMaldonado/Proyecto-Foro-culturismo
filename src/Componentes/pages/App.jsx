import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useTarjetas from '../Hook/useTarjeta'
import Inicio from './Inicio'
import Tar from './Tar'
import FormularioPage from './formularioPage'

export default function App(){
    const {tarjeta, agregar} = useTarjetas()

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio tarjeta={tarjeta}/>}/>
                <Route path="/Tarjetas" element={<Tar tarjeta={tarjeta}/>}/>
                <Route path="/Formulario" element={<FormularioPage agregar={agregar}/>}/>
            </Routes>
        </BrowserRouter>
    )
}