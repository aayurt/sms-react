export const loginCredential = (user) => ({
  type: "LOGIN",
  payload: user,
});

export const logoutCredential = () => ({
  type: "LOGOUT",
  payload: null,
});
