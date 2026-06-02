type Props = {
    options: string[];
}

const Radio = ({ options }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2">
          <input type="radio" name="radio" value={option} />
          {option}
        </label>
      ))}
    </div>
  )}

export default Radio
