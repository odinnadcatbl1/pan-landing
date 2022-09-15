import logo from "../../assets/logo.svg";
import Button from "../Button/Button";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container container--lg">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <img
                                src={logo}
                                alt="ПАН"
                                className="header__logo-img"
                            />
                        </div>

                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <a href="#">Пункт 1</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">Пункт 2</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">Пункт 3</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">Пункт 4</a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="#">Пункт 5</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header__right">
                        <Button className={"header__button"} text={"Кнопка"} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
