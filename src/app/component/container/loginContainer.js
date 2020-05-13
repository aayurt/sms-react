import { connect } from "react-redux";
import login from "../login/login";
import { loginCredential } from "../../store/action/action";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (user) => {
      dispatch(loginCredential(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(login);
