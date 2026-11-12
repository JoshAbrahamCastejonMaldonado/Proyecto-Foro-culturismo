import Tar from './Tar'
import Boton from '../Tarjetas/Boton'
import '../Styles/Tarjeta.css'

export default function Inicio({tarjeta}){
    return(
        <div className='pagina'>
            <Boton/>
            <header className='encabezado'>
                <h1>Leyendas del culturismo</h1>
                <p>Catálogo de los personajes más influyentes del fisicoculturismo.</p>
            </header>
            <Tar tarjeta={tarjeta}/>
        </div>
    )
}