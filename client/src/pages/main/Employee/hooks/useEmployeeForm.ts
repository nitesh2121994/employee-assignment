import { AxiosError } from "axios";
import { Employee } from "interfaces/employee";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { addEmployee, updateEmployee } from "services/Employee/employee.service";

const useEmployeeForm = () => {

    const navigate  = useNavigate();

    const navigateToList = () => {
        navigate('/employee');
    }

    const { error: addError, mutate: addEmployeeData } = useMutation<string, AxiosError, FormData>(addEmployee,
        {
            onSuccess: data => {
                navigateToList();
            }
        });
    const { error: updateError, mutate: updateEmployeeData } = useMutation<string, AxiosError, Employee>(updateEmployee,
        {
            onSuccess: data => {
                navigateToList();
            }
        });

    return { addError, addEmployeeData, updateError, updateEmployeeData, navigateToList };
}

export default useEmployeeForm;