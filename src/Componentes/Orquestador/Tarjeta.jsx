import { useState } from 'react'
import '../Styles/Tarjeta.css'
import Titulo from '../Tarjetas/Titulo'
import Imagen from '../Tarjetas/Imagen'
import Descripcion from '../Tarjetas/Descripcion'
import Logros from '../Tarjetas/logros'
import Rutina from '../Tarjetas/Rutina'
import Efecto from '../Home/Efecto'

export default function Tarjeta({nombre, img, pais, categoria, logros, descripcion, rutina}){

    const [estado, setEstado] = useState('normal')

    function abrir(){
        if (estado === 'normal') {
            setEstado('efecto')
        }
    }

    return(
        <div className='CentraC'>
            <div className='zonaImagen' onClick={abrir}>
                {estado === 'normal' && <Imagen img={img}/>}
                {estado === 'efecto' && (
                    <Efecto
                        src={img}
                        retraso={150}
                        duracion={2500}
                        onFin={() => setEstado('rutina')}
                    />
                )}
                {estado === 'rutina' && (
                    <Rutina
                        nombre={nombre}
                        rutina={rutina}
                        cerrar={() => setEstado('normal')}
                    />
                )}
            </div>
            <div className='Orde'>
                <Titulo title={nombre}/>
                <Descripcion pais={pais} categoria={categoria} texto={descripcion}/>
                <Logros lista={logros}/>
            </div>
        </div>
    )
}