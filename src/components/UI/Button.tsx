import React from 'react'

interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({className = ''}) => {
    return (
        <div className={className}>Button</div>
    )
}

export default Button