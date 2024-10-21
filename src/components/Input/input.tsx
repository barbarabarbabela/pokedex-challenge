import { forwardRef, type InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = 'text', ...props }, ref) => {
    return (
      <div className="text-black-500 placeholder-variant">
        <input
          {...props}
          type={type}
          name={name}
          ref={ref}
          className="px-4 py-2 lg:w-[480px] h-11 w-[200px]"
        />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
