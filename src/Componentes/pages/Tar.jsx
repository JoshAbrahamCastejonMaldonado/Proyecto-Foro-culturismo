import Tarjeta from '../Orquestador/Tarjeta'

export default function Tar({tarjeta}){
    return(
        <div className='catalogo'>
            {tarjeta.map((personaje)=>(
                <Tarjeta
                    key={personaje.Id}
                    nombre={personaje.Nombre}
                    img={personaje.imagen}
                    pais={personaje.pais}
                    categoria={personaje.categoria}
                    logros={personaje.logros}
                    descripcion={personaje.descripcion}
                    rutina={personaje.rutina}
                />
            ))}
        </div>
    )
}