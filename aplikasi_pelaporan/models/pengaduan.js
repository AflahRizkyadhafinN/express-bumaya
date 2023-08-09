import { Sequelize } from "sequelize";
import db from "../config.js";
import masyarakatDb from "./masyarakat.js";

const { DataTypes } = Sequelize;

const pengaduanDb = db.define(
  "pengaduan",
  {
    id_pengaduan: { type: DataTypes.INTERGER(11), primaryKey: true },
    tgl_pengaduan: DataTypes.DATE,
    nik: DataTypes.CHAR(16),
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM("0", "proses", "selesai"),
  },
  nik.belongTo,
  { freezeTableName: true }
);

export default pengaduanDb;
(async () => {
  await db.sync();
})();
