import './adv.css';

function Adv () {
    return (
        <div className="background">
            <div className="banner">
                <div className="banner__subtitle">Сломался электросамокат, гироскутер, велосипед?<strong> Мы поможем!</strong></div>
                <div className="banner__title">Комплексное обслуживание и ремонт электросамокатов, гироскутеров и велосипедов</div>
                <div className="banner__benefits">      
                    <div className="banner__benefit">
                        <img src="/img/garantee.png" img/>
                        <div className="banner__benefit-text">
                            <strong>Гарантия от 1 месяца до 2 лет</strong> на все виды работ
                        </div>
                    </div>  
                    <div className="banner__benefit">
                        <img src="/img/ded.png" img/>
                        <div className="banner__benefit-text">
                            <strong>Более 10 000 человек</strong> уже выбрали наш сервис
                        </div> 
                    </div>
                    <div className="banner__benefit">
                        <img src="/img/keys.png" img/>
                        <div className="banner__benefit-text">
                            <strong>15 лет на рынке</strong> ремонта и обслуживания спорт транспорта
                        </div>    
                    </div>
                </div>
                <a href="#form-callback-first" class="btn btn--primary">Оформить заказ онлайн</a>
            </div>    
        </div>
    );
}


export default Adv;
