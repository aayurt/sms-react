import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Fade from "@material-ui/core/Fade";

import "./Menu.css";

export default function Menu({ pass }) {
  console.log("pass", pass.passShow());
  return (
    <>
      <div
        className={pass.passShow() ? "left-menu-bar" : "left-menu-bar close"}
        onMouseLeave={() => pass.passSetShow(false)}
      >
        {/* {passShow} */}
        MENU
      </div>
    </>
  );
}
