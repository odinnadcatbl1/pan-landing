import { ICheckbox } from "../../types";

const Checkbox: React.FC<ICheckbox> = ({ label, onChange, id }) => {
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                className="checkbox__input"
                id={id}
                onChange={onChange}
            />
            <label htmlFor={id} className="checkbox__label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
