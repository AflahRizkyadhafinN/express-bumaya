import { Sequelize } from "sequelize";
import db from "../config.js";

const { DataTypes } = Sequelize;

const pengaduanDb = db.define(
  "pengaduan",
  {
    id_pengaduan: { type: DataTypes.INTEGER(11), primaryKey: true },
    tgl_pengaduan: DataTypes.DATE,
    nik: {
      type: DataTypes.CHAR(16),
      references: { model: "masyarakat", key: "nik" },
    },
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM("0", "proses", "selesai"),
  },
  { freezeTableName: true }
);

export default pengaduanDb;
(async () => {
  await db.sync();
})();
