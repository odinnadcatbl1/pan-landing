import introImg from "../../assets/intro-img.png";
import Button from "../Button/Button";
import Select from "../Select/Select";
import Checkbox from "../Checkbox/Checkbox";

const Intro: React.FC = () => {
    const CheckboxLabel: React.FC = () => {
        return (
            <span>
                Отправляя нам данную форму вы соглашаетесь с<br />
                <a href="#">политикой конфиденциальности</a>
            </span>
        );
    };

    return (
        <section className="intro">
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__left">
                        <div className="intro__title">
                            Недвижимость Санкт-Петербурга и Москвы
                        </div>

                        <form className="intro__form">
                            <div className="intro__actions">
                                <div className="intro__actions-item">
                                    <div className="intro__actions-title">
                                        Выбрать город
                                    </div>
                                    <Select
                                        placeholder={"Выбрать город"}
                                        options={[
                                            "Казань",
                                            "Москва",
                                            "Санкт-Петербург",
                                            "Оренбург",
                                        ]}
                                    />
                                </div>

                                <div className="intro__actions-item">
                                    <div className="intro__actions-title">
                                        Ваш e-mail
                                    </div>
                                    <div className="intro__input-container">
                                        <input
                                            className="intro__actions-input"
                                            placeholder="Введите e-mail"
                                            type="email"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="intro__button">
                                <Button text={"Кнопка действия"} />
                            </div>
                            <div className="intro__checkbox">
                                <Checkbox id={"id"} label={<CheckboxLabel />} />
                            </div>
                        </form>
                    </div>
                    <div className="intro__right">
                        <div className="intro__img-container">
                            <img src={introImg} alt="" className="intro__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
