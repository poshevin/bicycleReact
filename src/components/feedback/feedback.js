import './feedback.css';

function Feedback () {
    return (
        <div id="form-callback-first" className="feedback__container">
            <form className="banner__form form" novalidate="novalidate">
                <div className="form__description">
                    <p className="form__title">
                        Заполните форму для оформления услуги онлайн
                    </p>
                </div>
                <div className="form__elements">
                    <div className="formbox">
                        <input required class="form__input" type="text" name="name" placeholder="Введите ваше имя" />
                    </div>
                    <div className="formbox">
                        <input required="" class="form__input" type="tel" name="tel" placeholder="Введите ваш телефон"/>
                    </div>
                    <button type="submit" class="form__btn btn btn--primary">
                        Оформить онлайн заказ
                    </button>
                </div>
                <p class="form__text">
                        Оставляя заявку, вы принимаете
                        <a href="/privacy-policy.html"> условия пользовательского соглашения</a>
                </p>
            </form>
        </div>
    );
}

export default Feedback;