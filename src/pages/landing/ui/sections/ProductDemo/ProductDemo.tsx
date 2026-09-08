import style from "./ProductDemo.module.scss";
import { CiGrid42  } from "react-icons/ci";
import { BiLayer, BiMessageDetail } from "react-icons/bi";

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
                    <li><CiGrid42  className={style.taskIcon} /> Управление задачами </li>
                    <li><BiMessageDetail className={style.chatIcon} /> Мессенджер для работы </li>
                    <li><BiLayer className={style.crmIcon} /> Простая CRM </li>
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