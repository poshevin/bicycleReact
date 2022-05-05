import './reviews.css';

function Reviews () {
    return(
        <div className="reviews">
            <div className="title">
                <h3 className="titleText1">Более 10 000 довольных клиентов</h3>
                <h2 className="titleText2">5 рейтинг на Яндекс по оценкам наших клиентов</h2>
            </div>
            <div className="review">
                <div className="userInfo">
                    <img src="" alt="" className="userImg" />
                    <h1 className="date">12.08.2020</h1>
                    <h1 className="userName">Алена</h1>
                    <h1 className="userService">Ремонт руля и деки самоката</h1>
                </div>
                <h1 className="userReview">
                    Ребята очень крутые! Самокат начал скрипеть и шатался руль,
                    обратилась в несколько мастерских выставили счет как сам самокат стоил, потом обратилась в роллерслайф.
                    Здесь провели бесплатную диагностику, мастер показал и объяснил в чем проблема.
                    Все оказалось не так страшно как говорили другие. Отремонтировали меньше чем за час и вышло совсем не дорого))
                    И еще дали советы на будущее, чтобы ситуация не повторилась. Работа на 5 баллов, спасибо!
                </h1>
                <div className="arrowLeft"></div>
                <div className="arrowRight"></div>
                <a href="" className="moreReviews">Больше отзывов на Яндекс</a>
            </div>
        </div>
    );
}

export default Reviews;