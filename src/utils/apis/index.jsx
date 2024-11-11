import axios from "axios";
import { SERVER_URL } from "./urls";

const API = axios.create({ baseURL: SERVER_URL });

export const completedProgressAPI = (data) =>
  API.post("/api/user/progress", data);
