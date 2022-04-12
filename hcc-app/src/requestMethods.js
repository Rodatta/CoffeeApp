import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTRjOTYyNTY2Nzk2NzBlNTE5NjRiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc0MzY4NywiZXhwIjoxNjUwMDAyODg3fQ.209L2D10S6kewrb4insDh3JdOWJMwE2t3cZL2Ks32Xg";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
