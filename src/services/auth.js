import { apiClient } from "./config";

export const apiSignUp = async (payload) => {
  return apiClient.post("/api/v1/admin/signup", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/api/v1/admin/token", payload);
};
export const apiLogout = async (payload) => {
  return apiClient.post("/api/v1/admin/logout", payload);
};
