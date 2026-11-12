export default function Descripcion({pais, categoria, texto}){
    return(
        <div>
            <p className='meta'>{pais} · {categoria}</p>
            <p className='bio'>{texto}</p>
        </div>
    )
}