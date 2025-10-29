import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPen,
  faBook,
  faFilm,
  faImage,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const menuItems = [
    { label: "home", icon: faHome },
    { label: "blog", icon: faPen },
    { label: "books", icon: faBook },
    { label: "movies", icon: faFilm },
    { label: "photos", icon: faImage },
    { label: "albums", icon: faCompactDisc },
  ];

  return (
    <div className="grid justify-between grid-cols-2 gap-8 px-8 sm:px-0 sm:flex">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 underline cursor-pointer hover:text-yellow-200 underline-offset-2"
        >
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Header;
