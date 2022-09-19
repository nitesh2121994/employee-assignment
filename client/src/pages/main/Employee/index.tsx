import { SuspenseFallback } from 'components';
import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

const EmployeeList = lazy(() => import('./components/EmployeeList'));
const EmployeeForm = lazy(() => import('./components/EmployeeForm'));
const EmployeeView = lazy(() => import('./components/EmployeeView'));

const Employee = () => {
    return (
        <Suspense fallback={<SuspenseFallback />}>
            <Routes>
                <Route path="/" element={<Navigate to="list" replace />} />
                <Route path="list" element={<EmployeeList />} />
                <Route path="add" element={<EmployeeForm />} />
                <Route path="edit/:id" element={<EmployeeForm />} />
                <Route path="view/:id" element={<EmployeeView />} />
            </Routes>
        </Suspense>
    )
}

export default Employee;