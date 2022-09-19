import React from 'react';
import EmployeeListView from './components/EmployeeListView';
import { useQuery } from 'react-query';
import { getEmployees } from 'services';
import { AxiosError } from 'axios';
import { Employee } from 'interfaces/employee';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {

  const navigate = useNavigate();

  const { error, isLoading, data } = useQuery<unknown, AxiosError, Employee[]>('employees', getEmployees);

  const redirectToAdd = () => {
    navigate('../add')
  }

  return (
    <div className='employee-table-wrapper'>
      {isLoading && <Loader open={isLoading} />}
      {error && <ErrorMessage message={error.message} />}
      <div style={{ marginBottom: "20px" }}>
        <Button type="button" onClick={redirectToAdd}>Add</Button>
      </div>
      <EmployeeListView employeeList={data} />
    </div>
  );
}

export default EmployeeList;