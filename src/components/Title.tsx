import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <div className=" gap-2 md:flex md:text-left">
      <h1 className="lora mb-6 text-4xl"> {children} </h1>
      <hr className="relative top-6   hidden w-1/2  border-[1.5px] border-sky-900 border-opacity-30 md:inline-block" />
    </div>
  );
}
