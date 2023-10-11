import pengaduanDb from "../models/pengaduan.js";
import path from "path";
import fs from "fs";
import masyarakatDb from "../models/masyarakat.js";

export const getPengaduan = async (req, res) => {
  try {
    const response = await pengaduanDb.findAll({ include: [masyarakatDb] });
    res.json(response);
  } catch (e) {
    console.log(e.message);
  }
};

export const getPengaduanById = async (req, res) => {
  try {
    const response = await pengaduanDb.findOne({
      where: { id_pengaduan: req.params.id },
    });
    res.json(response);
  } catch (e) {
    console.log(e.message);
  }
};

export const postPengaduan = async (req, res) => {
  const file = req.files.foto;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;

  try {
    const request = await pengaduanDb.create({
      id_pengaduan: req.body.id_pengaduan,
      tgl_pengaduan: req.body.tgl_pengaduan,
      isi_laporan: req.body.isi_laporan,
      foto: url,
      status: req.body.status,
      masyarakatNik: req.body.nik,
    });
    res.status(200).json(request);
  } catch (e) {
    console.log(e.message);
  }
  file.mv(`./public/image/${fileName}`);
};

export const updatePengaduan = async (req, res) => {
  try {
    const response = await pengaduanDb.findOne({
      where: { id_pengaduan: req.params.id },
    });
    if (!response) {
      res.send("Data tidak ada");
    } else {
      const splitUrl = response.foto.split("/");
      const fileType = splitUrl[splitUrl.length - 1];
      fs.unlinkSync(`./public/image/${fileType}`);
      try {
        const file = req.files.foto;
        const ext = path.extname(file.name);
        const fileName = file.md5 + ext;
        const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
        file.mv(`./public/image/${fileName}`);
        pengaduanDb.update(
          {
            tgl_pengaduan: req.body.tgl_pengaduan,
            masyarakatNik: req.body.nik,
            isi_laporan: req.body.isi_laporan,
            foto: url,
            status: req.body.status,
          },
          { where: { id_pengaduan: req.params.id } }
        );
        res
          .status(200)
          .json({ msg: `Data ${req.params.id} berhasil diupdate` });
      } catch (error) {
        console.error(error.message);
      }
    }
  } catch (e) {
    e.message;
  }
};

export const deletePengaduan = async (req, res) => {
  const response = await pengaduanDb.findOne({
    where: { id_pengaduan: req.params.id },
  });
  const splitUrl = response.foto.split("/");
  const fileType = splitUrl[splitUrl.length - 1];
  fs.unlinkSync(`./public/image/${fileType}`);
  try {
    await pengaduanDb.destroy({ where: { id_pengaduan: req.params.id } });
    res.status(200).send("Data berhasil dihapus");
  } catch (error) {
    console.log(error.message);
  }
};
