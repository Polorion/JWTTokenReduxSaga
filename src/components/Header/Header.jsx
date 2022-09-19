import * as React from "react";
import S from "./Header.module.css";
import HeaderLink from "../UI/HeaderLink";

const Header = () => {
  return (
    <div className={S.header}>
      <HeaderLink
        className={S.link}
        link={"/animal/page/1"}
        name={"Все животные"}
      />
      <HeaderLink link={"/today"} name={"Запись на сегодня"} />
    </div>
  );
};

export default Header;
