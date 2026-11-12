export default function Rutina({nombre, rutina, cerrar}){

    if (!rutina) {
        return(
            <div className='rutina'>
                <button className='rutina-cerrar' onClick={cerrar}>✕</button>
                <h3>Rutina de {nombre}</h3>
                <p className='rutina-estilo'>Todavía no hay una rutina registrada.</p>
            </div>
        )
    }

    const dias = rutina.dias.map((dia, i) => {
        const ejercicios = dia.ejercicios.map((ejercicio, j) => {
            return <li key={j}>{ejercicio}</li>
        })

        return(
            <div key={i} className='rutina-dia'>
                <h4>{dia.dia} · {dia.enfoque}</h4>
                <ul>{ejercicios}</ul>
            </div>
        )
    })

    return(
        <div className='rutina'>
            <button className='rutina-cerrar' onClick={cerrar}>✕</button>
            <h3>Rutina de {nombre}</h3>
            <p className='rutina-estilo'>{rutina.estilo}</p>
            {dias}
        </div>
    )
}