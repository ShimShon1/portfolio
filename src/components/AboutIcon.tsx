import React, { ReactNode } from "react";

export default function AboutIcon({
  children,
  link,
  label,
}: {
  children: ReactNode;
  link: string;
  label: string;
}) {
  return (
    <a
      href={link}
      target={"_blank"}
      className="transition-all hover:scale-125 hover:text-sky-700 active:text-sky-400"
      aria-label={label}
    >
      {children}
    </a>
  );
}
