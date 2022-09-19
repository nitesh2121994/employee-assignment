import db from '../../models/index.js';
// image Upload
import multer from 'multer';
import path from 'path';

const Employee = db.employee;

export const checkLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let employee = await Employee.findOne({ where: { Email: email, Password: password } })
  if (employee) {
    const buff = new Buffer.from(`${email}:${password}`);
    const base64data = buff.toString('base64');
    res.status(200).json({
      success: true,
      token: base64data,
    });
  } else {
    res.status(401).json();
  }
}

// get employee list
export const getEmployees = async (_, res) => {
  const employees = await Employee.findAll({});
  res.status(200).json({
    data: employees
  });
}

// get employee by id
export const getEmployeeById = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.findOne({ where: { id: id } })
  res.status(200).json({
    data: employee
  });
}

// update employee by id
export const updateEmployee = async (req, res) => {
  const id = req.params.id;
  const employee = await Employee.update(req.body, { where: { id: id } })
  res.status(200).json({
    data: employee
  });
};

// add employee
export const addEmployee = async (req, res) => {
  const employeeInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    salaryRange: req.body.salaryRange,
    ageRange: req.body.ageRange,
    email: req.body.email,
    password: req.body.password,
    resumeName: req.file.path
  }
  const employee = await Employee.create(employeeInfo);
  res.status(200).json({
    data: employee
  });
}


// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

export const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Only pdf files are allowed.')
  }
}).single('file');



