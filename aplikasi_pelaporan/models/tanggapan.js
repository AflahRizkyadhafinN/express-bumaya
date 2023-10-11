import { Sequelize } from "sequelize";
import db from "../config.js";
import petugasDb from "./petugas.js";

const { DataTypes } = Sequelize;

const tanggapanDb = db.define(
  "tanggapan",
  {
    id_tanggapan: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
    },
    id_pengaduan: DataTypes.INTEGER(11),
    tgl_tanggapan: DataTypes.DATE,
    tanggapan: DataTypes.TEXT,
    id_petugas: DataTypes.INTEGER(11),
  },

  { freezeTableName: true }
);

export default tanggapanDb;
(async () => {
  await db.sync();
})();
