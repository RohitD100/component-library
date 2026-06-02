type Props = {
    loading?: boolean;
    label: string;
}

const CheckBox = ({ loading, label }: Props) => {
  return (
    <div className={`flex items-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  )
}

export default CheckBox
