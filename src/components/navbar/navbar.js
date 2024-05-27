import Link from 'next/link';
import styles from './navbar.module.scss';


export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-list']}>
                <li className={styles['navbar-item']}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles['navbar-item']}>
                    <Link href="/tags">
                        Tags
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

