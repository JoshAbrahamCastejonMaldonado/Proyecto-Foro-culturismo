import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inicial = {
    Nombre: '',
    Imagen: '',
    Pais: '',
    Categoria: '',
    Logros: '',
    Descripcion: ''
}

export default function useFormulario({agregar}){
    const navigate = useNavigate()
    const [datos, setDatos] = useState(inicial)

    const cambiar = (e) => {
        const {name, value} = e.target
        setDatos({...datos, [name]: value})
    }

    const enviar = (e) => {
        e.preventDefault()
        agregar({
            Id: Date.now(),
            Nombre: datos.Nombre,
            imagen: datos.Imagen,
            pais: datos.Pais,
            categoria: datos.Categoria,
            logros: datos.Logros.split(',').map((logro) => logro.trim()).filter((logro) => logro !== ''),
            descripcion: datos.Descripcion
        })
        navigate('/')
    }

    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: () => setDatos(inicial)
    }
}