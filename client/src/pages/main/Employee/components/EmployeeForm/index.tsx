import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import EmployeeFormView from './components/EmployeeFormView';
import useEmployeeForm from '../../hooks/useEmployeeForm';
import { useQueries } from 'react-query';
import { getAgeRangeList, getSalaryRangeList } from 'services';
import { Loader } from 'components';
import ErrorMessage from 'components/ErrorMessage';
import { getEmployeeById } from 'services/Employee/employee.service';

const EmployeeForm = () => {

  const { addError, addEmployeeData, updateError, updateEmployeeData } = useEmployeeForm();
  const { id } = useParams();

  const results = useQueries([
    {
      queryKey: ["employeeData"],
      queryFn: () => getEmployeeById(+id!),
      enabled: !!id
    },
    {
      queryKey: ["salaryRangeList"],
      queryFn: getSalaryRangeList
    },
    {
      queryKey: ["ageRangeList"],
      queryFn: getAgeRangeList
    },
  ]);

  useEffect(() => {

    return () => {
      results?.[0]?.remove()
    }
    // eslint-disable-next-line
  }, [])

  const handleSave = (data: any) => {
    if (id) {
      updateEmployeeData({ ...data, id: +id });
    } else {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      formData.append("file", data.resume[0]);
      addEmployeeData(formData);
    }
  }

  const isLoading = results.some(result => result.isLoading);

  return (
    <>
      {isLoading && <Loader open={isLoading} />}
      {addError && <ErrorMessage message={addError.message} />}
      {updateError && <ErrorMessage message={updateError.message} />}
      <EmployeeFormView
        isAdd={!id}
        employeeData={results[0].data}
        salaryRangeList={results[1].data}
        ageRangeList={results[2].data}
        saveEmployee={(data) => handleSave(data)}
      />
    </>
  )
}
export default EmployeeForm;