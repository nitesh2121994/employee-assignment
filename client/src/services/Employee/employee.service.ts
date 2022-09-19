import axios from "axios";
import config from 'env.config.json';
import { Employee } from "interfaces/employee";

const addTokenToHeader = () => {
    return {
        headers: {
            Authorization: localStorage.getItem('token') || ''
        }
    }
}

export const getEmployees = async () => {
    const { data: response } = await axios.get(`${config.baseUrl}employee/list`, addTokenToHeader());
    return response.data;
}
export const getEmployeeById = async (id: number) => {
    const { data: response } = await axios.get(`${config.baseUrl}employee/edit/${id}`, addTokenToHeader());
    return response.data;
}

export const addEmployee = async (data: FormData) => {
    const { data: response } = await axios.post(`${config.baseUrl}employee/add`, data, addTokenToHeader());
    return response.data;
}
export const updateEmployee = async (data: Employee) => {
    const { id, resumeName, ...rest } = data;
    const { data: response } = await axios.put(`${config.baseUrl}employee/update/${id}`, rest, addTokenToHeader());
    return response.data;
}