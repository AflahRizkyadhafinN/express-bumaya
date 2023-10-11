import { Sequelize } from "sequelize";
import db from "../config.js";
import Computerdb from "./computer.js";

const { DataTypes } = Sequelize;

const Userdb = db.define(
  "user",
  {
    name: DataTypes.STRING,
    nik: DataTypes.STRING,
  },
  { freezeTableName: true }
);

Userdb.hasOne(Computerdb, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Computerdb.belongsTo(Userdb, { foreignKey: "user_id" });

export default Userdb;
(async () => {
  await db.sync();
})();
