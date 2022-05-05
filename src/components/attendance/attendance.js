import './attendance.css';

function Attendance () {
    return (
        <div className="attendance">
            <div className="title">
                <h3 className="titleText1">Какие услуги мы предоставляем</h3>
                <h1 className="titleText2">Скидка 3% на ремонт при первом обращении</h1>
            </div>
            <div className="card">
                <div className="price">от 200р</div>
                <img src="" alt="" className="cardImg" />
                <h1 className="cardText">Ремонт и обслуживание гироскутеров</h1>
                <button className="cardBtn">Подробнее</button>
            </div>
            <div className="card">
                <div className="price">от 350р</div>
                <img src="" alt="" className="cardImg" />
                <h1 className="cardText">Ремонт и обслуживание электросамокатов</h1>
                <button className="cardBtn">Подробнее</button>
            </div>
            <div className="card">
                <div className="price">от 200р</div>
                <img src="" alt="" className="cardImg" />
                <h1 className="cardText">Ремонт и обслуживание велосипедов</h1>
                <button className="cardBtn">Подробнее</button>
            </div>
            <div className="card">
                <div className="price">от 100р</div>
                <img src="" alt="" className="cardImg" />
                <h1 className="cardText">Ski service сноубрды и горные лыжи</h1>
                <button className="cardBtn">Подробнее</button>
            </div>
        </div> 
    );
}

export default Attendance;