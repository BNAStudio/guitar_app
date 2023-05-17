import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css"
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    // console.log(router);

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                    <Image priority={false} src="/img/logo.svg" width={300} height={40} alt="Logo" />
                </Link>
                <nav className={styles.navegacion}>
                    <Link legacyBehavior href="/">
                        <a className={router.pathname === "/" ? styles.active : ""}>
                            Home
                        </a>
                    </Link>
                    <Link legacyBehavior href="/nosotros">
                        <a className={router.pathname === "/nosotros" ? styles.active : ""}>
                            Nosotros
                        </a>
                    </Link>
                    <Link legacyBehavior href="/tienda">
                        <a className={router.pathname === "/tienda" ? styles.active : ""}>
                            Tienda
                        </a>
                    </Link>
                    <Link legacyBehavior href="/blog">
                        <a className={router.pathname === "/blog" ? styles.active : ""}>
                            Blog
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
/**
 * useRouter: detecta ubicacion actual | router.pathname
 * legacyBehavior: permite asignar la etique <a> como hijo del componente <Link />
 * la etiqueta <a> se agrega con el fin de asignar clases al link, puesto que, no es posible agregarlo de forma directa al componente <Link />
 */