import { IButton } from "../../types";

const Button: React.FC<IButton> = ({ className, text }) => {
    return <button className={`button ${className}`}>{text}</button>;
};

export default Button;
