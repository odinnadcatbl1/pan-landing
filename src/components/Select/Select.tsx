import { useState, useEffect, useRef } from "react";
import { ISelect } from "../../types";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

const Select: React.FC<ISelect> = ({ placeholder, options }) => {
    const [isActive, setActive] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    const menuRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: any) => {
        setActiveItem(event.target?.textContent);
        setActive(false);
    };

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
    }, [isActive]);

    return (
        <div
            className="select"
            onClick={() => setActive(!isActive)}
            ref={menuRef}
        >
            <div className="select__active">
                <div className="select__name">{activeItem || placeholder}</div>
                <div className="select__arrow">
                    <img src={isActive ? arrowUp : arrowDown} alt="" />
                </div>
            </div>
            {isActive && (
                <ul className="select__options">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={(e) => handleClick(e)}
                            className={
                                option === activeItem
                                    ? "select__options-item select__options-item--active"
                                    : "select__options-item"
                            }
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
