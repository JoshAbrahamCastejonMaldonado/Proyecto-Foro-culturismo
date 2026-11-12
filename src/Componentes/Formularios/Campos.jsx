export default function Campos({label, type, name, value, onChange, required = false, placeholder, pattern, title}){
    return(
        <div className='campo'>
            <label className='etiqueta'>{label}</label>
            <input
                className='entrada'
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                pattern={pattern}
                title={title}
            />
        </div>
    )
}