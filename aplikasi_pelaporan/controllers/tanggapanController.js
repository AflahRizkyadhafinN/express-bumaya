import { where } from "sequelize";
import pengaduanDb from "../models/pengaduan.js";
import petugasDb from "../models/petugas.js";
import tanggapanDb from "../models/tanggapan.js";

export const getTanggapan = async (req, res) => {
  try {
    const response = await tanggapanDb.findAll({
      include: [
        {
          model: petugasDb,
          attributes: ["id_petugas", "nama", "username", "telp"],
        },
        pengaduanDb,
      ],
    });
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
};

export const getTanggapanById = async (req, res) => {
  try {
    const response = await tanggapanDb.findOne({
      where: { id_tanggapan: req.params.id },
      include: [
        {
          model: petugasDb,
          attributes: ["nama"],
        },
        pengaduanDb,
      ],
    });
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
};

export const postTanggapan = async (req, res) => {
  // const validasi = await pengaduanDb.findOne({
  //   where: { id_pengaduan: req.body.pengaduanIdPengaduan },
  // });
  // if (!validasi) {
  //   return res.send("Data tidak ada");
  // }
  console.log(req.body);
  try {
    const request = await tanggapanDb.create({
      tanggapan: req.body.tanggapan,
      pengaduanIdPengaduan: req.body.idPengaduan,
      petugaIdPetugas: req.body.idPetugas,
    });
    await pengaduanDb.update(
      {
        status: req.body.status,
      },
      { where: { id_pengaduan: req.body.idPengaduan } }
    );
    res.status(200).json(request);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTanggapan = async (req, res) => {
  try {
    const response = await tanggapanDb.update(
      {
        pengaduanIdPengaduan: req.body.pengaduanIdPengaduan,
        tanggapan: req.body.tanggapan,
        petugasIdPetugas: req.body.petugasIdPetugas,
      },
      {
        where: { id_tanggapan: req.params.id },
      }
    );
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
};

export const deleteTanggapan = async (req, res) => {
  try {
    await tanggapanDb.destroy({
      where: { id_tanggapan: req.params.id },
    });
    res.send(`Data id: ${req.params.id} berhasil dihapus`);
  } catch (e) {
    console.error(e.message);
  }
};
