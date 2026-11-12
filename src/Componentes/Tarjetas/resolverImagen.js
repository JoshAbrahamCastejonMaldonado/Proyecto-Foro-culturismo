const imagenes = import.meta.glob('../../assets/*', {
    eager: true,
    query: '?url',
    import: 'default'
})

export default function resolverImagen(img) {
    if (/^https?:\/\//i.test(img || '')) return img

    const nombre = img?.split('/').pop()
    return Object.entries(imagenes).find(([ruta]) => ruta.endsWith('/' + nombre))?.[1] || img
}
