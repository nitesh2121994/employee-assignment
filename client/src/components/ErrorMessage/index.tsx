import React from 'react'
import Alert from '@mui/material/Alert';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <Alert severity="error" style={{marginBottom: "10px"}}>{message}</Alert>
    )
}

export default ErrorMessage