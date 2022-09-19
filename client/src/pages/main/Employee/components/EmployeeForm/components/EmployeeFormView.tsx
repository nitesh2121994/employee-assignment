import React, { useEffect } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import '../styles.css';
import { CommonRange, Employee } from 'interfaces/employee';

interface EmployeeFormViewProps {
    ageRangeList?: CommonRange[],
    salaryRangeList?: CommonRange[],
    isAdd?: boolean;
    employeeData?: Employee;
    saveEmployee: (data: Employee) => void;
}

const EmployeeFormView = ({ saveEmployee, isAdd, employeeData, ageRangeList, salaryRangeList }: EmployeeFormViewProps) => {

    const { register, handleSubmit, setValue, formState: { errors }, control, trigger } = useForm({
        mode: "onChange"
    });
    const firstNameControl = { ...register("firstName", { required: true }) };
    const lastNameControl = { ...register("lastName", { required: true }) };
    const emailControl = { ...register("email", { required: true, pattern: /^\S+@\S+$/i }) };
    const fileControl = { ...register("resume", { required: isAdd }) };
    const passwordControl = { ...register("password", { required: isAdd }) };

    useEffect(() => {
        if (employeeData) {
            setValue('firstName', employeeData.firstName);
            setValue('lastName', employeeData.lastName);
            setValue('salaryRange', employeeData.salaryRange);
            setValue('ageRange', employeeData.ageRange);
            setValue('email', employeeData.email);
        }
        // eslint-disable-next-line
    }, [employeeData])

    const onSubmit = (data: any) => {
        saveEmployee(data);
    }

    return (
        <>
            <h3>Add Employee</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
                <div className="form-control-wrapper">
                    <TextField defaultValue="" id="outlined-basic" label="First Name*" variant="outlined" {...firstNameControl}
                        error={!!errors.firstName}
                    />
                    <TextField defaultValue="" id="outlined-basic" label="Last Name*" variant="outlined" {...lastNameControl} error={!!errors.lastName} />
                    <FormControl fullWidth>
                        <InputLabel id="ageRange" className="mb-2">
                            Age Range*
                        </InputLabel>
                        <Controller
                            name="ageRange"
                            control={control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    error={!!errors.ageRange}
                                    defaultValue="1"
                                    labelId="ageRange"
                                    className="input-container"
                                    id="ageRange-select"
                                    size="small"
                                    value={value}
                                    onChange={onChange}
                                >
                                    <MenuItem value="">Select Age Range</MenuItem>
                                    {ageRangeList?.map((row) => (
                                        <MenuItem key={`ageRanges${row.id}`} value={row.id}>{row.label}</MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>

                    <FormControl fullWidth >
                        <InputLabel id="salaryRange" className="mb-2">
                            Salary Range*
                        </InputLabel>
                        <Controller
                            name="salaryRange"
                            control={control}
                            rules={{ required: true }}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                <Select
                                    error={!!errors.salaryRange}
                                    defaultValue="1"
                                    labelId="salaryRange"
                                    className="input-container"
                                    id="salaryRange-select"
                                    size="small"
                                    value={value}
                                    onChange={onChange}
                                >
                                    <MenuItem value="">Select Salary Range</MenuItem>
                                    {salaryRangeList?.map((row) => (
                                        <MenuItem key={`salaryRanges${row.id}`} value={row.id}>{row.label}</MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                    <TextField defaultValue="" id="outlined-basic" label="Email*" variant="outlined" {...emailControl} error={!!errors.email} />
                    {
                        isAdd && <TextField defaultValue="" id="outlined-basic" label="Password" type={"password"}
                            variant="outlined" {...passwordControl} error={!!errors.email} />
                    }
                </div>
                {
                    isAdd && (
                        <div style={{ display: 'grid' }}>
                            <input type="file" {...fileControl} />
                            {errors.resume && <p style={{ color: 'red' }}>Resume is required</p>}
                        </div>
                    )}
                <div className="btn-wrapper">
                    <Button type="submit" onClick={() => trigger()} variant="contained">Save</Button>
                </div>
            </form>
        </>
    );
}

export default EmployeeFormView;