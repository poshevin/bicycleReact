import './attendance.css';

const serviceItems = [
    {cost: 500, src: "/img/gyro.png", alt:"Ремонт и обслуживание гироскутеров", text: "Ремонт и обслуживание гироскутеров"},
    {cost: 300, src: "/img/electro.png", alt:"Ремонт и обслуживание самокатов",  text: "Ремонт и обслуживание самокатов"},
    {cost: 150, src: "/img/bicycle.png", alt:"Ремонт и обслуживание велосипедов", text: "Ремонт и обслуживание велосипедов"},
    {cost: 200, src: "/img/ski.png", alt:"Ski service сноубрды и горные лыжи", text: "Ski service сноуборды и горные лыжи"},
];

function ServiceListItem ({cost, src, alt, text}) {
    return (
                <div class="service__item">
                    <div class="service__item-price">{cost}p</div>
                    <div class="service__item-img">
                    <img src={src} alt={alt} width="240" height="240"/>
                    </div>
                    <div class="service__item-text">
                        {text}
                    </div>
                    <a href="#price" class="service__item-btn btn btn--primary">Подробнее</a>
                </div>
    )
};


function Attendance () {
    return (
        <section id="service" className="section service">
            <div className="container">
                <div className="section__service">
                <h2 class="section__title service__title">
                    Какие услуги мы предоставляем
                </h2>
                <p class="section__subtitle service__subtitle">
                    <span>Скидка 3%</span> на ремонт при первом обращении
                </p>
                <div className="service__items">
                {serviceItems.map(item => {
                    return (
                    <ServiceListItem {...item}/>
                    )
                })}
                </div>
                </div> 
            </div>
        </section>

        
        
    );
}

export default Attendance;