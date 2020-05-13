import { connect } from "react-redux";
import logout from "../login/logout";
import { loginCredential } from "../../store/action/action";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutClick: () => {
      dispatch(loginCredential());
    },
  };
};
export default connect(null, mapDispatchToProps)(logout);
