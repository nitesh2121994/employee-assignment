import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import '../styles.css';
import { LoginInfo } from 'interfaces/login-info';

interface LoginFormProps {
    checkLogin: (data: LoginInfo) => void;
}

const LoginForm = ({ checkLogin }: LoginFormProps) => {

    const { register, handleSubmit, trigger, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const emailControl = { ...register("email", { required: true, pattern: /^\S+@\S+$/i }) };
    const passwordControl = { ...register("password", { required: true }) };

    const onSubmit = (data: LoginInfo) => {
        checkLogin(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-wrapper">
                <TextField defaultValue="" id="outlined-basic" label="Email*" variant="outlined" {...emailControl}
                    error={!!errors.email} />
                <TextField defaultValue="" id="outlined-basic" label="Password*" type={"password"} variant="outlined" {...passwordControl}
                    error={!!errors.password} />
                <input type="submit" onClick={() => trigger()} />
            </div>
        </form>
    );
}

export default LoginForm;