import { Link } from 'react-router-dom'
import B from '../../assets/boton.png'

export default function Boton(){
    return(
        <Link to="/Formulario">
            <img className='botonNav' src={B} alt="Ir al formulario"/>
        </Link>
    )
}