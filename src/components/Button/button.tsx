import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'submit',
  ...props
}) => {
  return (
    <div className="w-[85px] h-11 bg-white text-default border-default border-[1px] flex items-center justify-center rounded-md transition duration-200 ease-in-out hover:bg-blue-100 active:bg-blue-200">
      <button
        type={type}
        className="w-full h-full focus:outline-none"
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
