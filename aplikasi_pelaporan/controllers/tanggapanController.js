import pengaduanDb from "../models/pengaduan.js";
import tanggapanDb from "../models/tanggapan.js";

export const getTanggapan = async (req, res) => {
  try {
    const response = await tanggapanDb.findAll();
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
};

export const getTanggapanById = async (req, res) => {
  try {
    const response = await tanggapanDb.findOne({
      where: { id_tanggapan: req.params.id },
    });
    res.json(response);
  } catch (e) {
    console.error(e.message);
  }
};

export const postTanggapan = async (req, res) => {
  const validasi = await pengaduanDb.findOne({
    where: { id_pengaduan: req.body.id_pengaduan },
  });
  if (!validasi) {
    return res.send("Data tidak ada");
  }
  try {
    const request = await tanggapanDb.create({
      id_pengaduan: req.body.id_pengaduan,
      tgl_tanggapan: req.body.tgl_pengaduan,
      tanggapan: req.body.tanggapan,
      id_petugas: req.body.id_petugas,
    });
    res.status(200).json(request);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateTanggapan = async (req, res) => {
  try {
    const response = await tanggapanDb.update(
      {
        id_pengaduan: req.body.id_pengaduan,
        tgl_tanggapan: req.body.tgl_pengaduan,
        tanggapan: req.body.tanggapan,
        id_petugas: req.body.id_petugas,
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
