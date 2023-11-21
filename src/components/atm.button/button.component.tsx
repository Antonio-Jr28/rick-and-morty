import React from 'react';

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  loading?: boolean;
  onClick?: () => void | undefined;
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'callToAction';
}

const buttonStyles: Record<string, string> = {
  default: 'text-white border-2 rounded-lg w-full h-10 text-xl hover:bg-emerald-300 hover:text-black',
  primary: 'border-2 rounded-lg w-full h-10 text-xl text-white border-white hover:bg-emerald-300 hover:text-black',
  secondary:
    'border-2 h-10 rounded-lg w-[250px] text-white bg-violet-700 border-black hover:bg-emerald-300 hover:text-black',
  callToAction:
    'text-white border-yellow-500 bg-yellow-500 border-2 rounded-lg w-full h-10 text-xl hover:bg-yellow-700',
};

export const Button: React.FC<CustomButtonProps> = ({ loading, onClick, text, type = 'default', ...rest }) => {
  const buttonClass = buttonStyles[type] || buttonStyles.default;

  return (
    <button className={buttonClass} {...rest} onClick={onClick}>
      {loading ? 'Carregando...' : text}
    </button>
  );
};
