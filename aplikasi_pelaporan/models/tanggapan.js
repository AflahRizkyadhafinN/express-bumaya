import { BelongsTo, Sequelize } from "sequelize";
import db from "../config.js";
import petugasDb from "./petugas.js";
import pengaduanDb from "./pengaduan.js";

const { DataTypes } = Sequelize;

const tanggapanDb = db.define(
  "tanggapan",
  {
    id_tanggapan: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    tgl_tanggapan: { type: DataTypes.DATE, defaultValue: Sequelize.fn("now") },
    tanggapan: DataTypes.TEXT,
  },

  { freezeTableName: true }
);

tanggapanDb.belongsTo(pengaduanDb);
tanggapanDb.belongsTo(petugasDb);

export default tanggapanDb;
(async () => {
  await db.sync();
})();
