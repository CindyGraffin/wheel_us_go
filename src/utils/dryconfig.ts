import axios from "axios";

/**
 * fonction de configuration d'appel de axios
 */
export const api = axios.create({
    baseURL: "http://localhost:8800/api",
});
