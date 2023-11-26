import { Sequelize } from "sequelize";
import db from "../config.js";
import masyarakatDb from "./masyarakat.js";

const { DataTypes } = Sequelize;

const pengaduanDb = db.define(
  "pengaduan",
  {
    id_pengaduan: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    tgl_pengaduan: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn("now"),
    },
    isi_laporan: DataTypes.TEXT,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM("0", "proses", "selesai"),
  },
  { freezeTableName: true }
);

pengaduanDb.belongsTo(masyarakatDb);

export default pengaduanDb;
(async () => {
  await db.sync();
})();
