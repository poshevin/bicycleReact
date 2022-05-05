import './header.css';

function Menu () {
    return (
        <div className="header">
            <div className="logo">RollersLife<span classname="orangeWord">Service</span></div>
            <nav className="headerBtns">
                    <ul className="btns">
                        <li><a>Услуги</a></li>
                        <li><a>Стоимость</a></li>
                        <li><a>Кейсы</a></li>
                        <li><a>Отзывы</a></li>
                        <li><a>Акции</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Контакты</a></li>
                    </ul> 
            </nav>
            <div className="tel">
                <a target="_blank" className="number">8 812 988 53 52</a>
                <img className="whatsApp1" src="/img/whatsapp1.jpg"/>
                <img className="telegram1" src="/img/telegram1.jpg"/>
            </div>
            <div className="feedbackBtn">
                <a>Заказать звонок</a>
            </div>
        </div>
    );
}

export default Menu;