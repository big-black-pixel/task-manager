import style from "./ProductDemo.module.scss";

const ProductDemo = () => {
    return (
        <>
            <section className={style.productDemo}>
                <h1>
                    Система управления проектами
                    <br />
                    для больших команд
                </h1>
                <ul className={style.productToombler}>
                    <li><img src="" alt="img" /> Управление задачами </li>
                    <li><img src="" alt="img" /> Мессенджер для работы </li>
                    <li><img src="" alt="img" /> Простая CRM </li>
                </ul>
                <div className={style.productDemo__media}>
                    <div><video src="" ></video></div>
                    <div><img src="" alt="img" /></div>
                    <div><img src="" alt="img" /></div>
                </div>

            </section>
        </>
    )
}
export default ProductDemo;