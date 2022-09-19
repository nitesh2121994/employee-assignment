import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Employee } from 'interfaces/employee';
import { Link } from 'react-router-dom';
import { SalaryRangeInfo, AgeRangeInfo } from 'constants/index';

interface EmployeeListViewProps {
  employeeList?: Employee[];
}

const columns = [
  { field: '', headerName: '#', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 90 },
  { field: 'ageRange', headerName: 'Age Range', width: 90 },
  { field: 'salaryRange', headerName: 'Salary Range', width: 90 },
  { field: '', headerName: 'Edit', width: 90 },
];


const EmployeeListView = ({ employeeList }: EmployeeListViewProps) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Employee table">
        <TableHead>
          <TableRow>
            {columns.map(({ headerName }, index) => (
              <TableCell key={`employeetableHeader${headerName}${index}`} align="center">{headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList && employeeList.length > 0 ? (
            <>
              {employeeList.map((row, index) => (
                <TableRow
                  key={`employee-${row.id}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                   {index+1}
                  </TableCell>
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{AgeRangeInfo[row.ageRange]}</TableCell>
                  <TableCell align="center">{SalaryRangeInfo[row.salaryRange]}</TableCell>
                  <TableCell align="center">
                    <Link to={`../edit/${row.id}`}>Edit</Link>
                  </TableCell>
                </TableRow>
              ))
              }
            </>
          ) : (
            <TableRow>
              <TableCell>
                <Typography align='center'>  No records found.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default EmployeeListView;