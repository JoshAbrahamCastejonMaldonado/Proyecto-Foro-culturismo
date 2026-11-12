const imagenes = import.meta.glob(
    '../../assets/*',
    {
        eager: true,
        query: '?url',
        import: 'default'
    }
)

export default function Imagen({img}){

    const nombreArchivo = img?.split('/').pop()

    const rutaImagen = Object.entries(imagenes).find(
        ([ruta]) => ruta.endsWith('/' + nombreArchivo)
    )?.[1]

    return(
        <img
            className='imagen'
            src={rutaImagen || img}
            alt=""
        />
    )
}
