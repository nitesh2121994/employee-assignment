const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Prashant@2002",
    DB: "employeedb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default config;