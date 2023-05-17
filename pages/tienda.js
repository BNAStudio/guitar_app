import Layout from '../components/layout'
import ListadoGuitarras from '../components/ListadoGuitarras'

export default function Tienda() {
    return (
        <>
            <Layout
                title={"Tienda virtual"}
                description={"Guitar App - Nuestra tienda"}
            >
                <main className='contenedor'>
                    <h1 className='heading'>Nuestra coleccion</h1>
                    <ListadoGuitarras
                        
                    />
                </main>
            </Layout>
        </>
    )
}
