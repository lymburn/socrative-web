interface DividerProps {
    color?: string;
    thickness?: string;
    margin?: string;
    width?: string;
}

function Divider({color, thickness = '1px', margin = '1rem 0', width = '100%'}: DividerProps) {
    return (
        <div
            style={{
                backgroundColor: color,
                height: thickness,
                margin: margin,
                width: width,
            }}
        />
    );
};

export default Divider;