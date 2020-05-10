import React, { useState, useMemo, useCallback } from "react";
import { Grid } from "@material-ui/core";
import Logout from "./container/logoutContainer";
import Menu from "../../Layout/Menu";
import Fade from "@material-ui/core/Fade";
import Content from "./content/content";
import "./LandingPage.css";

function LandingPage() {
  const [show, setShow] = useState(false);
  const passSetShow = useCallback((newShow) => setShow(newShow), []);
  const passShow = useCallback(() => show, [show]);
  const getShow = useMemo(() => ({ passSetShow, passShow }), [show]);
  const mouseEnter = () => {
    // alert("===");
    setShow(true);
    // this.setState({opacity: 0.5})
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
          <Content />
        </Grid>
      </Grid>
      {/* <center>Welcome To SMS School Management System</center>
      <Logout /> */}
    </>
  );
}
export default LandingPage;
