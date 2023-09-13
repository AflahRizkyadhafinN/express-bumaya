import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const masyarakatDb = db.define(
  "masyarakat",
  {
    nik: { type: DataTypes.CHAR(16), primaryKey: true },
    nama: DataTypes.STRING(35),
    username: DataTypes.STRING(25),
    password: DataTypes.STRING(32),
    telp: DataTypes.STRING(13),
  },
  { freezeTableName: true }
);

export default masyarakatDb;
