export default function Campos({label, type, name, value, onChange}){
    return(
        <div className='campo'>
            <label className='etiqueta'>{label}</label>
            <input
                className='entrada'
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}