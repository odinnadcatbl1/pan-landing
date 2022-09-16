import { useState, useEffect, useRef, MouseEventHandler } from "react";
import { IHeaderNav } from "../../types";
import menuIcon from "../../assets/menu-icon.svg";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

const HeaderNav: React.FC<IHeaderNav> = ({ name, options }) => {
    const [active, setActive] = useState(false);
    const menuRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && menuRef.current !== null) {
                // @ts-ignore
                if (!menuRef.current.contains(event.target)) {
                    setActive(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [active]);

    return (
        <li className="header__nav-item" ref={options?.length ? menuRef : null}>
            <a
                className={
                    active && options?.length
                        ? "header__link header__link--active"
                        : "header__link"
                }
                href="#"
                onClick={() => setActive(!active)}
            >
                {name}

                {options?.length ? (
                    !active ? (
                        <div className="nav__arrow">
                            <img src={arrowDown} alt="" />
                        </div>
                    ) : (
                        <div className="nav__arrow">
                            <img src={arrowUp} alt="" />
                        </div>
                    )
                ) : (
                    ""
                )}
            </a>

            {options?.length && active && (
                <ul className="nav__submenu">
                    {options.map((option) => {
                        return (
                            <li className="nav__submenu-item" key={option.name}>
                                {
                                    <>
                                        <a
                                            href={option.link}
                                            className="nav__submenu-link"
                                        >
                                            <img
                                                src={menuIcon}
                                                alt=""
                                                className="nav__submenu-icon"
                                            />
                                            <div className="nav__submenu-name">
                                                {option.name}
                                            </div>
                                        </a>

                                        <div className="nav__submenu-descr">
                                            {option.descr}
                                        </div>
                                    </>
                                }
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
};

export default HeaderNav;
