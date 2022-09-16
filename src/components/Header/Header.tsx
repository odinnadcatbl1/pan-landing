import logo from "../../assets/logo.svg";
import { IHeaderNav } from "../../types";
import Button from "../Button/Button";
import HeaderNav from "./HeaderNav";

const Header: React.FC = () => {
    const headerNavOptions: IHeaderNav = {
        name: "Пункт 1",
        options: [
            {
                name: "Меню 1",
                link: "#",
                descr: "Покупайте и продавайте",
            },
            {
                name: "Меню 2",
                link: "#",
                descr: "Покупайте и продавайте",
            },
            {
                name: "Меню 3",
                link: "#",
                descr: "Давайте подружимся",
            },
            {
                name: "Меню 4",
                link: "#",
                descr: "Давайте подружимся",
            },
        ],
    };

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
                                <HeaderNav
                                    name={headerNavOptions.name}
                                    options={headerNavOptions.options}
                                />
                                <HeaderNav name={"Пункт 2"} />
                                <HeaderNav name={"Пункт 3"} />
                                <HeaderNav name={"Пункт 4"} />
                                <HeaderNav name={"Пункт 5"} />
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
