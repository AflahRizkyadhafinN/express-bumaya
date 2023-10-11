import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const petugasDb = db.define(
  "petugas",
  {
    id_petugas: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    nama: Sequelize.STRING,
    username: DataTypes.STRING(25),
    password: DataTypes.STRING(32),
    telp: DataTypes.STRING(13),
    level: DataTypes.ENUM("admin", "petugas"),
  },
  { freezeTableName: true }
);

export default petugasDb;
(async () => {
  await db.sync();
})();
