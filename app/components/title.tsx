import React from "react";
import { linkStyles } from "../constants";
import { ArrowIcon } from "./icons";

type Props = {
  title: string;
  link: string;
};

export default function TitleComponent({ title, link }: Props) {
  return (
    <a className={linkStyles} rel="noopener noreferrer" target="_blank" href={link}>
      <ArrowIcon />
      <p className="font-bold text-xl font-serif m-0">{title}</p>
    </a>
  );
}
