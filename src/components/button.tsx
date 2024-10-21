interface ButtonProps {
  type?: 'button' | 'submit'
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <div className="w-[85px] h-11 bg-[#FFFFFF] text-azul border-azul border-[1px] flex items-center justify-center rounded-md transition duration-200 ease-in-out hover:bg-blue-100 active:bg-blue-200">
      <button
        type={type}
        onClick={onClick}
        className="w-full h-full focus:outline-none"
      >
        {children}
      </button>
    </div>
  )
}

export default Button
