import axios from "axios";
import { LoginInfo } from "interfaces/login-info";
import config from 'env.config.json';

export const checkLogin = async (data: LoginInfo) => {
    const { data: response } = await axios.post(`${config.baseUrl}checklogin`, data);
    return response.token;
}