type SpinnerProps = {
    size?: "sm" | "md" | "lg";
};

const Spinner = ({ size = "md" }: SpinnerProps) => {
    return (
        <div
            className={`border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin
      ${size === "sm" ? "w-6 h-6" : ""}
      ${size === "md" ? "w-10 h-10" : ""}
      ${size === "lg" ? "w-16 h-16" : ""}
    `}
        ></div>
    );
};

export default Spinner;
