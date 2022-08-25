import { API } from './api';

export async function logout(token: string) {
  try {
    return API.post(`/user/logout/${token}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    return error;
  }
}
