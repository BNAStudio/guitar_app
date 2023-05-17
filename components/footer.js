import Link from "next/link"
import styles from "../styles/footer.module.css"

const year = new Date().getFullYear()
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link legacyBehavior href="/">
                        Home
                    </Link>
                    <Link legacyBehavior href="/nosotros">
                        Nosotros
                    </Link>
                    <Link legacyBehavior href="/blog">
                        Blog
                    </Link>
                    <Link legacyBehavior href="/tienda">
                        Tienda
                    </Link>
                </nav>
                <p className={styles.copyright}>Todos los derechos reservados {year}</p>
            </div>
        </footer>
    )
}
