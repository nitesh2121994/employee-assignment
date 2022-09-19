import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "services";
import { LoginInfo } from "interfaces/login-info";

const useLogin = () => {

    const navigate = useNavigate();

    const { error, mutate } = useMutation<string, AxiosError, LoginInfo>(checkLogin,
        {
            onSuccess: data => {
                localStorage.setItem('token', data);
                navigate('/dashboard');
            }
        });

    return { error, mutate };
}

export default useLogin;