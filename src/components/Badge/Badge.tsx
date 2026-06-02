type Props = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "danger";
}

const Badge = ({ children, variant = "primary" }: Props) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white"
  };

  return (
    <div className={`inline-block ${variantClasses[variant]} px-3 py-1 rounded-full text-sm`}>
      {children}
    </div>
  )
}

export default Badge
