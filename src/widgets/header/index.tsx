import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.head}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="YouGile" />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Продукты</a></li>
                    <li><a href="/">Цены</a></li>
                    <li><a href="/">Обучение</a></li>
                    <li><a href="/">Обновления</a></li>
                    <li><a href="/">Коробочная версия</a></li>
                    <li><a href="/">О нас</a></li>
                </ul>
            </nav>

            <div className={styles.actions}>
                <div className={styles.icons}>
                    <a href="/"><img src="/phone.svg" alt="Phone" /></a>
                    <a href="/"><img src="/globe.svg" alt="Language" /></a>
                </div>
                <div className={styles.buttons}>
                    <a href="/login" className={styles.loginBtn}>Войти</a>
                    <a href="/register" className={styles.registerBtn}>Регистрация</a>
                </div>
            </div>
        </div>
    );
};

export default Header;