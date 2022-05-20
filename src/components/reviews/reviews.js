import './reviews.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Reviews () {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

        const slidesInfo = [
            {img: "/img/slideOne.jpg", date: "20.08.2020", name:"Maria L", infoTitle: "Ремонт электросамоката Xiaomi", text: 
            "Недавно сломался электросамокат Xiaomi, просто не включался и все. Расстроилась, что больше не будет работать. Обзвонила несколько мастерских, в итоге выбрала RollersLife. Оченьудобно, что ребята по телефону сказали, что им нужно дляпредварительной диагностики,а я записала видео и отправилана вотсап. Заподозрили поломку батареи и назвали примернуюстоимость. В итоге, отремонтировали все за 2 дня (проблемадействительно была в батареи и еще несколько деталейзаменили). Цена соответствовала заявленной при диагностике. Сейчас катаюсь на самокате как раньше. Очень довольна, спасибо!"},
            {img: "/img/slideTwo.jpg", date: "17.08.2020", name:"Алена", infoTitle: "Ремонт руля и деки самоката", text: "Ребята очень крутые! Самокат начал скрипеть и шатался руль, обратилась в несколько мастерских выставили счет как сам самокат стоил, потом обратилась в роллерслайф. Здесь провели бесплатную диагностику, мастер показал и объяснил в чем проблема. Все оказалось не так страшно как говорили другие. Отремонтировали меньше чем за час и вышло совсем не дорого)) И еще дали советы на будущее, чтобы ситуация не повторилась. Работа на 5 баллов, спасибо!"},
            {img: "/img/slideThree.jpg", date: "28.07.2020", name:"Александра Ф", infoTitle: "Контроллер и аккумулятор для Kugoo", text:" Заказывала контроллер и аккумулятор для Kugoo (цена с учетом доставки была ниже, чем покупка в своём городе + не надо ждать поставок). Ребята рассказали и подсказали, что лучше взять и сделали небольшую скидку, так как это моя первая у них покупка, что очень приятно :) Посылку получила через 5 дней СДЭКом, спасибо большое! " },
            {img: "/img/slideFour.jpg", date: "11.08.2020", name:"Александр Жаров", infoTitle: "Ремонт платы гироскутера", text: "Сломался гироскутер и было не понятно, что именно случилось - просто перестал включаться. Обратился в ближайшую мастерскую, ребята провели бесплатную диагностику. Оказалось дело в плате. Все быстро починили, недорого и главное с гарантией! Спасибо!)"},
        ];

        function SliderCreator ({img, date, name, infoTitle, text}) {
            return(
            <div className="centered">
            <div className="review__card">
                <div class="review__info">
                    <div class="review__info-img">
                      <img src={img} alt="Отзыв о RollersLife" width="70" height="71"/>
                    </div>
                    <div class="review__info-elements">
                      <div class="review__info-date">{date}</div>
                      <div class="review__info-name">{name}</div>
                      <div class="review__info-title">
                        {infoTitle}
                      </div>
                    </div>
                  </div>
                <div className="review__text">{text}</div>            
            </div>
            </div>
            )
        };


    return(
        <section id="review" className="section review">
            <div className="container">
                <div className="section__review">
                    <h2 className="section__title review__title">Более 10 000 довольных клиентов</h2>
                    <p className="section__subtitle review__subtitle">
                        <span>4.8 / 5</span> рейтинг на 
                    <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.205212%2C59.988779&amp;mode=search&amp;oid=1239714352&amp;ol=biz&amp;sctx=ZAAAAAgBEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJZVJDG4CN7z8RCOkpcoi40j8iBQABAgQFKAowADjOs76ptuiPzjxAAkgBVc3MzD5YAGoCcnVwAJ0BzcxMPaABAKgBAL0BHVl%2FLg%3D%3D&amp;sll=30.205212%2C59.988779&amp;sspn=0.030813%2C0.009127&amp;text=rollerslife%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&amp;z=16" target="_blank" class="yandex"> Яндекс по оценкам наших клиентов</a>
                    </p>
                    <Slider {...settings}>
                        {slidesInfo.map(item => {
                            return (
                                <SliderCreator {...item}/>
                            )
                        })}
                    </Slider>
                   
                </div>
                <div className="review__btn">
                    <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.205212%2C59.988779&amp;mode=search&amp;oid=1239714352&amp;ol=biz&amp;sctx=ZAAAAAgBEAAaKAoSCRR5knTNUD5AEfTF3osv%2BE1AEhIJZVJDG4CN7z8RCOkpcoi40j8iBQABAgQFKAowADjOs76ptuiPzjxAAkgBVc3MzD5YAGoCcnVwAJ0BzcxMPaABAKgBAL0BHVl%2FLg%3D%3D&amp;sll=30.205212%2C59.988779&amp;sspn=0.030813%2C0.009127&amp;text=rollerslife%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&amp;z=16" target="_blank" class="link review__link">
                        Больше отзывов на <span class="yandex">Яндекс</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Reviews;