import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return (
    <main className=" w-[90%]  m-auto  overflow-auto bg-[#F0F0F5]">
      {children}
    </main>
  );
};
