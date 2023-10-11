import { Sequelize } from "sequelize";
import db from "../config.js";
import Userdb from "./user.js";
import Projectdb from "./project.js";

const { DataTypes } = Sequelize;

const Departmentdb = db.define(
  "department",
  {
    department_head: DataTypes.STRING,
    department_description: DataTypes.STRING,
  },
  { freezeTableName: true }
);

Departmentdb.hasMany(Userdb, { foreignKey: "department_id" });
Userdb.belongsTo(Departmentdb, { foreignKey: "department_id" });

export default Departmentdb;
(async () => {
  await db.sync();
})();
