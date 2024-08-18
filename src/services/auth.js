import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/admin/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/admin/token", payload);
};
export const apiLogout = async (payload) => {
  return apiClient.post("/admin/logout", payload);
};

export const apiCheckUsernameExists = async(username) => {
  return apiClient.get(`/auth/${username}`);
};