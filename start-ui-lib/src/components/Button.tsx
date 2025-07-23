import React from 'react';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Inherit all button props

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  disabled = false,
  onClick,
  ...rest
}) => {
  const base = 'px-4 py-2 font-semibold rounded';
  const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-300 text-black',
    outline: 'border border-blue-500 text-blue-500',
  };

  const classes = `${base} ${variants[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`;

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;