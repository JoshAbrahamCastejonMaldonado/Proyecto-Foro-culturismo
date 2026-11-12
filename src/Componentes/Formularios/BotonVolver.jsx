import { Link } from 'react-router-dom'
import B from '../../assets/Boton.png'

export default function BotonVolver(){
    return(
        <Link to="/">
            <img className='botonNav' src={B} alt="Volver al catálogo"/>
        </Link>
    )
}