import axios from "axios";

export const getUsers = () => {
  axios.get("http://localhost:5001/api/users").then(async (res) => {
    console.log(await res);
  });
};
