import resolverImagen from './resolverImagen'

export default function Imagen({img, nombre}){
    return <img className="imagen" src={resolverImagen(img)} alt={nombre || ''}/>
}
