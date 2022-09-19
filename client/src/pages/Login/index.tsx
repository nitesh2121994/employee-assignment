import React from 'react'
import LoginForm from './components/LoginForm'
import ErrorMessage from 'components/ErrorMessage';
import useLogin from './hooks/useLogin';

const Login = () => {

    const { error, mutate } = useLogin();

    return (
        <>
            <div className="d-flex align-items-center justify-content-center h-100">
                <div className='login-wrapper'>
                    {error && <ErrorMessage message={error.message} />}
                    <h3>Enter your login credentials</h3>
                    < LoginForm checkLogin={(data) => mutate(data)} />

                </div>
            </div>
        </>
    )
}

export default Login;
