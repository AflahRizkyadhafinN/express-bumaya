import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const Computerdb = db.define(
  "computer",
  {
    nama_computer: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default Computerdb;
(async () => {
  await db.sync();
})();
