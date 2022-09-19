import express from 'express';
import { checkLogin, upload, addEmployee, getEmployees, updateEmployee, getEmployeeById } from '../controllers/Employee/index.js';
import { getAgeRangeList } from '../controllers/Common/ageRange.js';
import { getSalaryRangeList } from '../controllers/Common/salaryRange.js';

const router = express.Router();
// router.post('/checklogin', checkLogin);
router.post('/employee/add', upload, addEmployee);
router.put('/employee/update/:id', updateEmployee);
router.get('/employee/list', getEmployees);
router.get('/employee/edit/:id', getEmployeeById);
router.get('/salaryrange/list', getSalaryRangeList);
router.get('/agerange/list', getAgeRangeList);


export default router;