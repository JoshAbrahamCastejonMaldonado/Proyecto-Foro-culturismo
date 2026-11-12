import { useState, useEffect } from 'react'
import personajes from '../../data.json'

export default function useTarjetas(){

    const [tarjeta, setTarjeta] = useState(() => {
        const guardados = localStorage.getItem('tarjetas')

        if (guardados) {
            return JSON.parse(guardados)
        } else {
            return personajes
        }
    })

    useEffect(() => {
        localStorage.setItem('tarjetas', JSON.stringify(tarjeta))
    }, [tarjeta])

    const agregar = (nueva) => {
        setTarjeta((anterior) => [...anterior, nueva])
    }

    return {tarjeta, agregar}
}
