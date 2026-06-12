type SpinnerProps = {
    size?: number;
    color?: string;
    trackColor?: string;
    thickness?: number;
    speed?: number;
    className?: string;
    style?: React.CSSProperties;
};
export default function Spinner({
    size = 32,
    color = "#6366f1",
    trackColor = "#e5e7eb",
    thickness = 4,
    speed = 0.8,
    className = "",
    style = {},
}:SpinnerProps) {
    return (
        <div
            role="status"
            aria-label="Loading"
            className={className}
            style={{
                width: size,
                height: size,
                border: `${thickness}px solid ${trackColor}`,
                borderTopColor: color,
                borderRadius: "50%",
                animation: `spin ${speed}s linear infinite`,
                ...style,
            }}
        >
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
