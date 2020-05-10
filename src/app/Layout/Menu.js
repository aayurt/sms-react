import React from "react";
import "./Menu.css";
import Content from "../router/component/content/content";

export default function Menu({ pass }) {
  return (
    <>
      <div
        className={pass.passShow() ? "left-menu-bar" : "left-menu-bar close"}
        onMouseLeave={() => pass.passSetShow(false)}
      >
        {pass.passShow() ? (
          <>
            <Content />
          </>
        ) : null}
      </div>
    </>
  );
}
