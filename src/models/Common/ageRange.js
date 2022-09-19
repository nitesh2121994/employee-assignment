const AgeRangeModel = (sequelize, Sequelize) => {
    const AgeRange = sequelize.define("ageRange", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: Sequelize.DataTypes.STRING
        }
    });

    return AgeRange;
};

export default AgeRangeModel;