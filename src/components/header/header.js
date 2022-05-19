import './header.css';

function Header () {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="headerMenu">
                        <div className="logo">RollersLife<span className="orangeWord">Service</span></div>
                        <nav className="menu">
                            <ul className="btns">
                                <li><a>Услуги</a></li>
                                <li><a>Стоимость</a></li>
                                <li><a>Кейсы</a></li>
                                <li><a>Отзывы</a></li>
                                <li><a>Акции</a></li>
                                <li><a>FAQ</a></li>
                                <li><a>Контакты</a></li>
                            </ul> 
                            <div className="tel">
                                <a target="_blank" className="number">8 812 988 53 52</a>
                                <img className="whatsApp1" src="/img/whatsapp1.jpg" target="_blank"/>
                                <img className="telegram1" src="/img/telegram1.jpg" target="_blank"/>
                            </div>
                            <div className="feedbackBtn">
                                <a href="">Заказать звонок</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;