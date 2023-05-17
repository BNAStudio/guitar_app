import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <>
            <Layout
                title={"Nosotros"}
                description={"Guitar App - Sobre nosotros"}
            >
                <main className='contenedor'>
                    <h1 className='heading'>Nosotros</h1>
                    <div className={styles.contenido}>
                        <Image src="/img/nosotros.jpg" alt='Sobre nosotros' width={1000} height={800} />
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis quis velit ut porta. Phasellus nec metus ut ante tristique porttitor. Suspendisse venenatis interdum libero, non malesuada lectus dictum id. Fusce pretium, mi at commodo interdum, mauris sapien aliquet erat, ut congue velit mauris quis sapien.
                            </p>
                            <p>
                                Sed leo sapien, fermentum sed imperdiet eu, posuere et urna. Vivamus ac fermentum mi. Praesent posuere, ligula ac faucibus laoreet, risus mi porttitor nunc, in porta est mauris at dui. Morbi vestibulum venenatis nibh sit amet tristique. Ut convallis efficitur odio sit amet maximus.
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}