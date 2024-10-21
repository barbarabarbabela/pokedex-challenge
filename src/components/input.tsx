interface InputProps {
  value: string
  onInputChange: (value: string) => void
}

function Input({ onInputChange, value }: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value)
  }

  return (
    <div className="text-black-500 placeholder-[#C9CED4]">
      <input
        type="text"
        value={value}
        placeholder="Pesquisar"
        className="px-4 py-2 lg:w-[480px] h-11 w-[200px]"
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Input
