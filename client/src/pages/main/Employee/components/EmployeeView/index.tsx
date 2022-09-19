import React, { useRef } from 'react'
import { Button, Typography } from '@mui/material';
import { Loader } from 'components';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from 'services/Employee/employee.service';
import './index.css';
import { AgeRangeInfo, SalaryRangeInfo } from 'constants/index';
import ErrorMessage from 'components/ErrorMessage';
import { useReactToPrint } from 'react-to-print';

const EmployeeView = () => {

  const { id } = useParams();

  const { data, isLoading } = useQuery('employeeDataView', () => getEmployeeById(+id!));

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current || null,
  });

  if (isLoading) {
    return <Loader open={isLoading} />;
  }

  if (!data) {
    return <ErrorMessage message='No data found' />;
  }

  return (
    <>
      <Button variant='outlined' onClick={handlePrint}>Print</Button>
      <div className='employee-form-view' ref={componentRef}>
        <div>
          <Typography>First Name</Typography>
          <Typography>{data?.firstName}</Typography>
        </div>
        <div>
          <Typography>Last Name</Typography>
          <Typography>{data?.lastName}</Typography>
        </div>
        <div>
          <Typography>Age Range</Typography>
          <Typography>{AgeRangeInfo[data?.ageRange]}</Typography>
        </div>
        <div>
          <Typography>Salary Range</Typography>
          <Typography>{SalaryRangeInfo[data?.salaryRange]}</Typography>
        </div>
        <div>
          <Typography>Email</Typography>
          <Typography>{data?.email}</Typography>
        </div>
      </div>
    </>

  )
}

export default EmployeeView;