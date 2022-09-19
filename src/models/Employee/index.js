const EmployeeModel = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.DataTypes.STRING
        },
        lastName: {
            type: Sequelize.DataTypes.STRING
        },
        ageRange: {
            type: Sequelize.DataTypes.INTEGER
        },
        salaryRange: {
            type: Sequelize.DataTypes.INTEGER
        },
        email: {
            type: Sequelize.DataTypes.STRING
        },
        password: {
            type: Sequelize.DataTypes.STRING
        },  
        resumeName: {
            type: Sequelize.DataTypes.STRING
        }
    });

    return Employee;
};

export default EmployeeModel;