import '../Styles/Formulario.css'
import Campos from '../Formularios/Campos'
import Boton from '../Formularios/Boton'
import BotonVolver from '../Formularios/BotonVolver'

export default function Formulario({datos, onCambio, onEnviar, onReset}){
    return(
        <div className='paginaFormulario'>
            <BotonVolver/>
            <form className='formulario' onSubmit={onEnviar}>
                <h2 className='tituloForm'>Agregar culturista</h2>
                <Campos label="Nombre" type="text" name="Nombre" value={datos.Nombre} onChange={onCambio}/>
                <Campos
                    label="Enlace de la imagen (URL)"
                    type="url"
                    name="Imagen"
                    value={datos.Imagen}
                    onChange={onCambio}
                    required
                    placeholder="https://ejemplo.com/foto.jpg"
                    pattern="https?://.+"
                    title="Pega un enlace directo a una imagen que empiece por http:// o https://."
                />
                <Campos label="País" type="text" name="Pais" value={datos.Pais} onChange={onCambio}/>
                <Campos label="Categoría" type="text" name="Categoria" value={datos.Categoria} onChange={onCambio}/>
                <Campos label="Logros (separados por coma)" type="text" name="Logros" value={datos.Logros} onChange={onCambio}/>
                <Campos label="Descripción" type="text" name="Descripcion" value={datos.Descripcion} onChange={onCambio}/>
                <div className='botones'>
                    <Boton texto="Enviar" type="submit" clase="botonEnviar"/>
                    <Boton texto="Resetear" type="button" onClick={onReset} clase="botonReset"/>
                </div>
            </form>
        </div>
    )
}