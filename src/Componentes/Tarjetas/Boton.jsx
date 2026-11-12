import { Link } from 'react-router-dom'
import B from '../../assets/Boton.png'

export default function Boton(){
    return(
        <Link className="botonFormulario" to="/Formulario">
            <img src={B} alt=""/>
            Añadir culturista
        </Link>
    )
}
