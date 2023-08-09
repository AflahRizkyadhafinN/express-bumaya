import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const tanggapanDb = db.define(
  "tanggapan",
  {
    id_tanggapan: { type: DataTypes.INTERGER(11), primaryKey: true },
    id_pengaduan: DataTypes.INTERGER(11),
    tgl_pengaduan: DataTypes.DATE,
    tanggapan: DataTypes.TEXT,
    id_petugas: DataTypes.INTERGER(11),
  },
  { freezeTableName: true }
);

export default tanggapanDb;
(async () => {
  await db.sync();
})();
