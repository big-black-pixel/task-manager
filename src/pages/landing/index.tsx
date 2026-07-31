import style from "./index.module.scss";

import Header from "../../widgets/header";
import Footer from "../../widgets/footer";
import ProductDemo from "./ui/sections/ProductDemo/ProductDemo";

const LandingPage = () => {
    return (
        <div >
            <Header />

            <main className={style.landingPage}>
            
                <ProductDemo />

                <section className={style.demoSleider}>
                    <h1>До 10 человек бесплатно навсегда</h1>
                    <h2>Без ограничений по функциям и времени</h2>
                    <div>
                        <div>
                            <button>Зарегистрироваться</button>
                            <button><img src="" alt="Я" /></button>
                            <button><img src="" alt="WK" /></button>
                            <button><img src="" alt="G" /></button>
                        </div>
                        <div><button><img src="" alt="Telefon" />Заказать звонок </button></div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default LandingPage;