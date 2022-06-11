import { ReactElement } from 'react';

interface ButtonProps {
  icon?: ReactElement;
  onClick: () => void;
  text: string;
}

export default function Button({ icon, onClick, text }: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
