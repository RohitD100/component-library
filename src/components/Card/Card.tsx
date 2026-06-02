type CardProps = {
    children: React.ReactNode;
    className?: string;
    height?: number;
    width?: number;
};

const Card = ({ children, className = "", height, width }: CardProps) => {
    return (
        <div
            className={`
                bg-black/10
                shadow-md
                 rounded-lg 
                 p-4
                 ${className}
                 `}
            style={{
                height: height ? `${height}px` : "auto",
                width: width ? `${width}px` : "auto",
            }}
        >
            {children}
        </div>
    );
};

export default Card;
