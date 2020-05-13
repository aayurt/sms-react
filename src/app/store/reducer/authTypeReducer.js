const INITIAL_STATE = {
  authToken: null,
  user: null,
};

function authTypeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN": {
      const user = action.payload;
      return { user: user };
    }
    case "REGISTER": {
      const { authToken } = action.payload;
      return { authToken, user: null };
    }
    case "LOGOUT": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
export default authTypeReducer;
