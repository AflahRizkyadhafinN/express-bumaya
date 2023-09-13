import masyarakatDb from "../models/masyarakat.js";
import crypto from "crypto";

export const getMasyarakat = async (req, res) => {
  try {
    const response = await masyarakatDb.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMasyarakatById = async (req, res) => {
  try {
    const response = await masyarakatDb.findOne({
      where: { nik: req.params.nik },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const postMasyarakat = async (req, res) => {
  function calculateSHA256Hash(data) {
    const sha256Hash = crypto.createHash("sha256");
    sha256Hash.update(data);
    return sha256Hash.digest("hex");
  }

  const hash = calculateSHA256Hash(req.body.password);

  console.log(req.body);
  try {
    await masyarakatDb.create({
      nik: req.body.nik,
      nama: req.body.nama,
      username: req.body.username,
      password: hash,
      telp: req.body.telp,
    });
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMasyarakat = async (req, res) => {
  function calculateSHA256Hash(data) {
    const sha256Hash = crypto.createHash("sha256");
    sha256Hash.update(data);
    return sha256Hash.digest("hex");
  }

  const hash = calculateSHA256Hash(req.body.password);

  try {
    masyarakatDb.update(
      {
        nama: req.body.nama,
        username: req.body.username,
        password: hash,
        telp: req.body.telp,
      },
      { where: { nik: req.params.nik } }
    );
    res.status(200).json({ msg: `Data ${req.params.nik} berhasil diupdate` });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMasyarakat = async (req, res) => {
  try {
    await masyarakatDb.destroy({
      where: { nik: req.params.nik },
    });
    res.status(200).json({ msg: "Data berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
