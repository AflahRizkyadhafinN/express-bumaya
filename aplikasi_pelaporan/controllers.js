import masyarakatDb from "./models/masyarakat.js";
import petugasDb from "./models/petugas.js";

// Controller Masyarakat
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
  console.log(req.body);
  try {
    const request = await masyarakatDb.create({
      nik: req.body.nik,
      nama: req.body.nama,
      username: req.body.username,
      password: req.body.password,
      telp: req.body.telp,
    });
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMasyarakat = async (req, res) => {
  try {
    const request = masyarakatDb.update(
      {
        nama: req.body.nama,
        username: req.body.username,
        password: req.body.password,
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
    const request = await masyarakatDb.destroy({
      where: { nik: req.params.nik },
    });
    res.status(200).json({ msg: "Data berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};

// Controller Petugas
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
  console.log(req.body);
  try {
    const request = await petugasDb.create({
      id_petugas: req.body.id_petugas,
      nama: req.body.nama,
      username: req.body.username,
      password: req.body.password,
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
    const request = petugasDb.update(
      {
        nama: req.body.nama,
        username: req.body.username,
        password: req.body.password,
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
    const request = petugasDb.destroy({ where: { id_petugas: req.params.id } });
    res.status(200).json({ msg: "Data berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
