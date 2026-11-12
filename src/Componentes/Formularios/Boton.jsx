export default function Boton({texto, type, onClick, clase}){
    return(
        <button
            className={clase}
            type={type}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}