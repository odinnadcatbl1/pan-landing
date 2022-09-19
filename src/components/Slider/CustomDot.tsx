interface IDot {
    isActive: boolean;
}

const CustomDot: React.FC<IDot> = ({ isActive }) => {
    return (
        <span
            style={{
                display: "inline-block",
                marginTop: "4.5rem",
                height: "7px",
                width: "7px",
                borderRadius: "50%",
                background: isActive ? "#FF2D23" : "#8F95AC",
            }}
        ></span>
    );
};

export default CustomDot;
