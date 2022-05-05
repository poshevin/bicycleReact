import './feedback.css';

function Feedback () {
    return (
        <div className="Feedback">
            <div className="text">
                <div className="info">
                   <h2 className="freeVisual">Бесплатный осмотр спорт транспорта и консультация с нашим специалистом</h2> 
                   <h3 className="freeVisualInfo">Заполните заявку и наш мастер свяжется с вами в течение 15 минут</h3>
                </div>
                <div className="conditions">
                    <h1 className="conditionsText">Оставляя заявку, вы принимаете условия пользовательского соглашения</h1>
                </div>
                <button className="haveConsultation">Получить консультацию</button>
                <input type="text" className="number" placeholder="Введите ваш телефон"/> 
                <input type="text" className="name" placeholder="Введите ваше имя"/>     
            </div>
            <div className="backgroundForm"></div>
        </div>
    );
}

export default Feedback;