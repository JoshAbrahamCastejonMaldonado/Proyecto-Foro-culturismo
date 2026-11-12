import { Link } from 'react-router-dom'
import B from '../../assets/Styles/Boton.jpj'

export default function Boton(){
    return(
        <Link to="/Formulario"><img src={B} alt="" /></Link>
    )
}