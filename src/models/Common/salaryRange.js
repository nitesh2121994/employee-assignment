const SalaryRangeModel = (sequelize, Sequelize) => {
    const SalaryRange = sequelize.define("salaryRange", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: Sequelize.DataTypes.STRING
        }
    });

    return SalaryRange;
};

export default SalaryRangeModel;