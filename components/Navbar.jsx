import styles from "../styles/Navbar.module.css"
import Image from 'next/image'

const Navbar = ()=> {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="" width="30" height="30"/>
            </div>
            <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!!</div>
            <div className={styles.text}>0123 456 789</div>
            </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="160px" height="70px" objectFit="cover"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blogs</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
                <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar