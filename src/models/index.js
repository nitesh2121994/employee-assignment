import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import Employee from './Employee/index.js';
import AgeRange from './Common/ageRange.js';
import SalaryRange from './Common/salaryRange.js';

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.employee = Employee(sequelize, Sequelize);
db.ageRange = AgeRange(sequelize, Sequelize);
db.salaryRange = SalaryRange(sequelize, Sequelize);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

export default db;