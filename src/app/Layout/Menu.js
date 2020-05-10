import React from "react";
import "./Menu.css";

export default function Menu({ pass }) {
  console.log("pass", pass.passShow());
  return (
    <>
      <div
        className={pass.passShow() ? "left-menu-bar" : "left-menu-bar close"}
        onMouseLeave={() => pass.passSetShow(false)}
      >
        {pass.passShow() ? "MENU" : null}
      </div>
    </>
  );
}
