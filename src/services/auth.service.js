import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (username, name, password) => {
  return axios.post(API_URL + "/", {
    username,
    name,
    password,
  });
};

const login = (username, password) => {
  const users = {
    user: username,
    password: password,
  }
  return axios
    .post(API_URL + "auth", JSON.stringify(users), 
    {
      headers: {
        "content-type":"application/json"
      }
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};