import { Sequelize } from "sequelize";
import db from "../config.js";
import Departmentdb from "./departement.js";

const { DataTypes } = Sequelize;

const Projectdb = db.define(
  "project",
  {
    project_head: DataTypes.STRING,
    project_name: DataTypes.STRING,
    project_description: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default Projectdb;
(async () => {
  await db.sync();
})();
