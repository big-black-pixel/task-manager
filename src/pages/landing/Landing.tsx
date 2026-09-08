import styles from "./Landing.module.scss";
import { BiLogoVk, BiPhoneIncoming } from "react-icons/bi";
import { FaYandex } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Header from "../../widgets/header";
import Footer from "../../widgets/footer";
import ProductDemo from "./ui/sections/ProductDemo/ProductDemo";

const Landing = () => {
    return (
        <>
            <Header />

            <section className={styles.landingPage}>

                <ProductDemo />

                <section className={styles.demoSlider}>
                    <h1>До 10 человек бесплатно навсегда</h1>
                    <h2>Без ограничений по функциям и времени</h2>
                    <div className={styles.actionsCard}>
                        <div className={styles.actionsCardButtons}>
                            <button className={styles.registerButton}>
                                <span className={styles.registerButtonText}>Зарегистрироваться</span>
                            </button>
                            <button className={styles.socialButtonYandex} aria-label="Войти через Яндекс"><FaYandex /></button>
                            <button className={styles.socialButtonVk} aria-label="Войти через VK"><BiLogoVk /></button>
                            <button className={styles.socialButtonGoogle} aria-label="Войти через Google"><FcGoogle /></button>
                        </div>
                        <div className={styles.actionsCardCall}>
                            <button>
                                <BiPhoneIncoming className="size-[18px]" />
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </section>

            </section>

            <Footer />
        </>
    )
}

export default Landing;