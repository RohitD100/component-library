type AlertProps = {
  type: "success" | "error" | "warning" | "info";
  message: string;
}

const Alert = ({ type, message }: AlertProps) => {
  return (
    <div className={`p-4 rounded ${type === "success" ? "bg-green-100 text-green-800" : type === "error" ? "bg-red-100 text-red-800" : type === "warning" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
      {message}
    </div>
  )
}

export default Alert
