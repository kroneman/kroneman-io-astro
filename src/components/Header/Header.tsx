import React from "react";

import style from "./Header.module.scss";

type HeaderProps = {
  Logo: React.ReactNode | React.ReactNode[];
};

const Header = (props: HeaderProps) => {
  return (
    <header className={style.Header}>
      <a href="/">
        <h2 className={style.Title}>
          {props.Logo}
        </h2>
      </a>
      {props.children}
    </header>
  );
};

export default Header;
