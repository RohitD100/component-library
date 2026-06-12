import type { SpinnerProps } from "./type";

export default function Spinner({
    size = 32,
    color = "#6366f1",
    trackColor = "#e5e7eb",
    thickness = 4,
    speed = 0.8,
    style = {},
}:SpinnerProps) {
    return (
        <div
            role="status"
            aria-label="Loading"
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
