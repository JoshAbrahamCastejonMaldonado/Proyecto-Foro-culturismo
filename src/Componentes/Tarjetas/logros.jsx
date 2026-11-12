export default function Logros({lista}) {
    
    const items = lista.map((logro, i) => {
        return <li key={i} className="logro-item">{logro}</li>
    })
    
    return (
        <ul className= "logros">
            {items}
        </ul>
    )
}