import './price-list.css';

function Prices () {
    return (
        <div className="prices">
            <div className="title">
                <h3 className="mainTitle">Стоимость популярных услуг</h3>
                <h1 className="secondTitle">Скидка 3% на ремонт при первом обращении</h1>
            </div>
            <div className="tabs">
                <button className="tabsBtn oneBtn">Гироскутеры</button>
                <button className="tabsBtn twoBtn">Электросамокаты</button>
                <button className="tabsBtn threeBtn">Велосипеды</button>
                <button className="tabsBtn fourBtn">Ski Service</button>
            </div>
            <div className="priceTable">
                
            </div>
        </div>
    );
}