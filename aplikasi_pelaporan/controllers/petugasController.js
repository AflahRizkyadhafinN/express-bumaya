import petugasDb from "../models/petugas.js";
import crypto from "crypto";

export const getPetugas = async (req, res) => {
  try {
    const response = await petugasDb.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPetugasById = async (req, res) => {
  try {
    const response = await petugasDb.findOne({
      where: { id_petugas: req.params.id },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const postPetugas = async (req, res) => {
  function calculateSHA256Hash(data) {
    const sha256Hash = crypto.createHash("sha256");
    sha256Hash.update(data);
    return sha256Hash.digest("hex");
  }

  const hash = calculateSHA256Hash(req.body.password);

  console.log(req.body);
  try {
    await petugasDb.create({
      id_petugas: req.body.id_petugas,
      nama: req.body.nama,
      username: req.body.username,
      password: hash,
      telp: req.body.telp,
      level: req.body.level,
    });
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePetugas = async (req, res) => {
  try {
    petugasDb.update(
      {
        nama: req.body.nama,
        username: req.body.username,
        telp: req.body.telp,
        level: req.body.level,
      },
      { where: { id_petugas: req.params.id } }
    );
    res.status(200).json({ msg: `Data ${req.params.id} berhasil diupdate` });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePetugas = async (req, res) => {
  try {
    await petugasDb.destroy({
      where: { id_petugas: req.params.id },
    });
    res.status(200).json({ msg: "Data berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
