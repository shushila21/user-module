import { api } from ".";

export const signInUser = (data: any) => api.post("/user/sign-in/", data);

export const logoutUser = () => api.post("/user/logout/");

export const forgotPassword = (data: any) =>
  api.post("/user/forgot-password/", data);
