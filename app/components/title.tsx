import { linkStyles } from "../constants";
import { ArrowIcon } from "./icons";

type Props = {
  title: string;
  link: string;
  newTab?: boolean;
};

export default function TitleComponent({ title, link, newTab = true }: Props) {
  return (
    <a
      className={linkStyles}
      rel="noopener noreferrer"
      target={newTab ? "_blank" : "_self"}
      href={link}
    >
      <ArrowIcon />
      <p className="font-bold text-xl font-serif m-0">{title}</p>
    </a>
  );
}
