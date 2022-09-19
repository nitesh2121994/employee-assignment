import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { PrivateRoute, SuspenseFallback } from 'components';
import Header from 'components/Header';

const Login = lazy(() => import('pages/Login'));
const Dashboard = lazy(() => import('pages/main/Dashboard'));
const Employee = lazy(() => import('pages/main/Employee'));

const AppRouting = () => {

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Router>
        <Header />
        <div className="main-container">
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="employee/*" element={
              <PrivateRoute>
                <Employee />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}

export default AppRouting;