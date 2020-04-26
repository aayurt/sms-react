import React from "react";
import { connect } from "react-redux";

function logout({ onLogoutClick }) {
  return (
    <div>
      <button onClick={onLogoutClick()}>Log out</button>
    </div>
  );
}
export default connect()(logout);
