import './adv.css';

function Adv () {
    return (
        <div className="background">
            <div className="benefits">
                <div className="one">
                    <img src="/img/garantee.png" img/>
                    <div className="oneText">Гарантия от 1 месяца до 2 лет на все виды работ</div>
                </div>
                <div className="two">
                    <img src="/img/ded.png" img/>
                    <div className="twoText">Более 10 000 человек уже выбрали наш сервис</div>
                </div>
                <div className="three">
                    <img src="/img/keys.png" img/>
                    <div className="threeText">15 лет на рынке ремонта и обслуживания спорт транспорта</div>
                </div>
            </div>
            <h3 className="broken">Сломался электросамокат, гироскутер, велосипед? Мы поможем!</h3>
            <h2 className="repair">Комплексное обслуживание и ремонт электросамокатов, гироскутеров и велосипедов</h2>
            <button className="cost">Узнать стоимость ремонта</button>
        </div>
    );
}


export default Adv;
