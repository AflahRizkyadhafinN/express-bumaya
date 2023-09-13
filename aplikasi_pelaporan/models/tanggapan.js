import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const tanggapanDb = db.define(
  "tanggapan",
  {
    id_tanggapan: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    id_pengaduan: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "pengaduan",
        key: "id_pengaduan",
      },
    },
    tgl_tanggapan: DataTypes.DATE,
    tanggapan: DataTypes.TEXT,
    id_petugas: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "petugas",
        key: "id_petugas",
      },
    },
  },
  { freezeTableName: true }
);

export default tanggapanDb;
(async () => {
  await db.sync();
})();
