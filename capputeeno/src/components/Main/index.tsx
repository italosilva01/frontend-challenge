import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  className?: string;
}
export const Main = ({ children, className }: MainProps) => {
  return (
    <main
      className={` w-[90%]  m-auto  overflow-auto bg-[#F0F0F5] ${className}`}
    >
      {children}
    </main>
  );
};
