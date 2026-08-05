import styles from "./Landing.module.scss";

import Header from "../../widgets/header";
import Footer from "../../widgets/footer";
import ProductDemo from "./ui/sections/ProductDemo/ProductDemo";

const Landing = () => {
    return (
        <div >
            <Header />

            <main className={styles.landingPage}>
            
                <ProductDemo />

                <section className={styles.demoSlider}>
                    <h1>До 10 человек бесплатно навсегда</h1>
                    <h2>Без ограничений по функциям и времени</h2>
                    <div className={styles.actionsCard}>
                        <div className={styles.actionsCardButtons}>
                            <button>Зарегистрироваться</button>
                            <button><img src="" alt="Я" /></button>
                            <button><img src="" alt="WK" /></button>
                            <button><img src="" alt="G" /></button>
                        </div>
                        <div className={styles.actionsCardCall}>
                            <button><img src="" alt="Telefon" />Заказать звонок </button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Landing;