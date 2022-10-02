import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = ()=> {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill"/>
            </div>
            <div className={styles.item}>
            <div className={styles.card}>
                <h2  className={styles.motto}>
                    SANTA FE PIZZA, BEST IN TOWN. VISIT US!
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                <p className={styles.text}>
                    Bv. Santa Clara 2705 #304.
                    <br/> Santa Fe Capital
                    <br/> +54 987 654 321
                </p>
                <p className={styles.text}>
                    Viven en un country 1010 #235.
                    <br/> Santa Fe Capital
                    <br/> +54 123 456 789
                </p>
                <p className={styles.text}>
                    Masacre Masla 7110 #104.
                    <br/> Santa Fe Capital
                    <br/> +54 456 123 789
                </p>
                <p className={styles.text}>
                    Bv. Don Loe 1005 #125.
                    <br/> Santa Fe Capital
                    <br/> +54 789 123 456
                </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
                    MONDAY UNTIL FRIDAY
                    <br/> 9:00 - 23:00
                </p>
                <p className={styles.text}>
                    SATURDAY - SUNDAY
                    <br/> 10:00 - 24:00
                </p>
            </div>
            </div>
        </div>
    )
}

export default Footer