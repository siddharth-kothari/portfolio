import React from 'react'

interface ButtonProps{
    text: string;
    className?: string;
    action?:any
}

const Button = ({text, className, action}: ButtonProps) => {
  return (
    <button className={`bg-white text-black rounded-full font-semibold py-2 px-8 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[2px_5px_0_0_black] hover:translate-x-[-2px] hover:translate-y-[-4px] ${className}`} onClick={action}>
        {text}
    </button>
  )
}

export default Button