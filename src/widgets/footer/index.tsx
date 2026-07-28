import styles from './Footer.module.scss';

const Futer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h4>Блог:</h4>
                    <ul>
                        <li><a href="/blog/updates">Обновления</a></li>
                        <li><a href="/blog/agile">Agile методология</a></li>
                        <li><a href="/blog/box">Коробочная версия</a></li>
                        <li><a href="/blog/support">Клиентский сервис</a></li>
                        <li><a href="/blog/trello-analog">YouGile – российский аналог Трелло</a></li>
                        <li><a href="/blog/crm">9 лучших CRM-систем для малого бизнеса</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Информация:</h4>
                    <ul>
                        <li><a href="/about">О нас</a></li>
                        <li><a href="/careers">Наши вакансии</a></li>
                        <li><a href="/faq">Задать вопрос</a></li>
                        <li><a href="/callback">Заказать звонок</a></li>
                        <li><a href="/report">Сообщить о проблеме</a></li>
                        <li><a href="/knowledge-base">База знаний</a></li>
                        <li><a href="/download">Скачать приложение</a></li>
                        <li><a href="/privacy">Политика конфиденциальности</a></li>
                        <li><a href="/consent">Согласие ОПД клиента</a></li>
                        <li><a href="/offer">Публичная оферта</a></li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h4>Отдел продаж:</h4>
                        <a href="mailto:sales@mock.com">sales@mock.com</a>
                    </div>
                    <div>
                        <h4>Бухгалтерия:</h4>
                        <a href="mailto:accounting@mock.com">accounting@mock.com</a>
                    </div>
                    <div>
                        <h4>Поддержка:</h4>
                        <a href="mailto:support@mock.com">support@mock.com</a>
                    </div>
                    <div>
                        <h4>Поддержка коробочных клиентов:</h4>
                        <a href="mailto:info@mock.com">info@mock.com</a>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <img src="/mock-logo.svg" alt="Logo" />
                            <div>
                                <span>Windows / Mac / Linux</span>
                                <strong>Desktop app</strong>
                            </div>
                        </div>
                        <div>
                            <img src="/mock-screen.svg" alt="Screen" />
                            <div>
                                <span>Открыть в</span>
                                <strong>Браузере</strong>
                            </div>
                        </div>
                    </div>
                    <a href="/presentation">Скачать презентацию</a>
                </div>
            </div>

            <div>
                <span>Copyright © 2026 YouGile</span>
            </div>
        </footer>
    );
}

export default Futer;