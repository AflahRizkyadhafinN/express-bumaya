import { Sequelize } from "sequelize";

const db = new Sequelize("relasi_db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

export default db;
