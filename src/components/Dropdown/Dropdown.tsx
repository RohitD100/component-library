type Props = {
    options: string[];
}

const Dropdown = ({ options }: Props) => {
  return (
    <select className="border p-2 rounded" >
        {options.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
  )
}

export default Dropdown
