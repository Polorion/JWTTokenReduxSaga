import * as React from "react";
import S from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={S.spinWrapper}>
      <div className={S.spinner}></div>
    </div>
  );
};

export default Spinner;
