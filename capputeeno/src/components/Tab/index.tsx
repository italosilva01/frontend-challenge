import React from 'react';
interface TabProps {
  text: string;
  onClick?: () => void;
  active?: boolean;
}

export const Tab = ({ text, onClick, active }: TabProps) => {
  const fontStyleCommun = 'text-base';
  const fontActive = `border-b-4 border-orange-600  font-semibold ${fontStyleCommun}`;

  const fontUnActive = `border-0 text-text-gray-500 ${fontStyleCommun}`;

  return (
    <div onClick={onClick} className="mr-10 text-center">
      <p className={active ? fontActive : fontUnActive}>{text}</p>
    </div>
  );
};
