import { Grid } from "@material-ui/core";
import React, { useCallback, useMemo, useState } from "react";
import Menu from "../Layout/Menu";
import Homepage from "../router/Homepage";
import "./LandingPage.css";

function LandingPage() {
  const [show, setShow] = useState(false);
  const passSetShow = useCallback((newShow) => setShow(newShow), []);
  const passShow = useCallback(() => show, [show]);
  const getShow = useMemo(() => ({ passSetShow, passShow }), [show]);
  const mouseEnter = () => {
    setShow(true);
  };
  return (
    <>
      {
        <div
          className={show ? "top-left showFalse" : "top-left"}
          onMouseEnter={mouseEnter}
        ></div>
      }
      <Grid container direction="row">
        <Grid item>
          <Menu pass={getShow} />
        </Grid>

        <Grid item xs>
          {/* All the contents are routed through here */}
          <Homepage />
        </Grid>
      </Grid>
    </>
  );
}
export default LandingPage;
