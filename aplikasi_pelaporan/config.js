import { Sequelize } from "sequelize";

const db = new Sequelize("laporan_masyarakat", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
