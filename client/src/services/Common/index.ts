import axios from "axios";
import config from 'env.config.json';

const addTokenToHeader = () => {
    return {
        headers: {
            Authorization: localStorage.getItem('token') || ''
        }
    }
}

export const getSalaryRangeList = async () => {
    const { data: response } =  await axios.get(`${config.baseUrl}salaryrange/list`, addTokenToHeader());
    return response.data;
}
export const getAgeRangeList = async () => {
    const { data: response } =  await axios.get(`${config.baseUrl}agerange/list`, addTokenToHeader());
    return response.data;
}