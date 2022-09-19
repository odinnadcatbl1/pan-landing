import { IButton } from "../../types";

const Button: React.FC<IButton> = ({ className, text, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
