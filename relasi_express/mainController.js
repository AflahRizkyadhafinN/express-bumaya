import Computerdb from "./models/computer.js";
import { Deptprojdb, Departmentdb, Projectdb } from "./models/deptproj.js";
import Userdb from "./models/user.js";

export const getUser = async (req, res) => {
  try {
    const response = await Userdb.findAll({
      include: [Departmentdb],
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const postUser = async (req, res) => {
  var departmentId = req.body.department_id;

  const check = await Departmentdb.findOne({
    where: { id: departmentId },
  });

  if (check) {
    try {
      await Userdb.create({
        name: req.body.name,
        nik: req.body.nik,
        department_id: departmentId,
      });
      res.status(200).json({ msg: "Data berhasil ditambahkan" });
    } catch (error) {
      console.error(error.message);
    }
  } else {
    res.send(`department dengan id: ${departmentId} tidak ada`);
  }
};

export const deleteUser = async (req, res) => {
  try {
    Userdb.destroy({ where: { id: req.params.id } });
    res.send(`Data dengan id: ${req.params.id} berhasil dihapus`);
  } catch (error) {
    console.error(error.message);
  }
};

export const getComputer = async (req, res) => {
  try {
    const response = await Computerdb.findAll({
      include: [Userdb],
    });
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const postComputer = async (req, res) => {
  const request = await Userdb.findOne({ where: { id: req.body.user_id } });

  if (request) {
    try {
      await Computerdb.create({
        nama_computer: req.body.nama_computer,
        user_id: req.body.user_id,
      });
      res.status(200).json({ msg: "Data berhasil ditambahkan" });
    } catch (error) {
      console.error(error.message);
    }
  } else {
    res.send(`User dengan id: ${req.body.user_id} tidak ditemukan`);
  }
};

export const deleteComputer = async (req, res) => {
  try {
    Computerdb.destroy({ where: { id: req.params.id } });
    res.send(`Data dengan id: ${req.params.id} berhasil dihapus`);
  } catch (error) {
    console.error(error.message);
  }
};

export const getDepartment = async (req, res) => {
  try {
    const response = await Departmentdb.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const postDepartment = async (req, res) => {
  try {
    await Departmentdb.create({
      department_head: req.body.department_head,
      department_description: req.body.department_description,
    });
    res.status(200).json({ msg: "Data berhasil ditambahkan" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    Departmentdb.destroy({ where: { id: req.params.id } });
    res.send(`Data dengan id: ${req.params.id} berhasil dihapus`);
  } catch (error) {
    console.error(error.message);
  }
};

export const getProject = async (req, res) => {
  try {
    const response = await Projectdb.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
  }
};

export const postProject = async (req, res) => {
  try {
    await Projectdb.create(
      {
        project_head: req.body.project_head,
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        departments: [
          {
            department_head: req.body.department_head,
          },
        ],
      },
      { include: Departmentdb }
    );
    res.status(200).json({ msg: "Data berhasil ditambahkan" });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteProject = async (req, res) => {
  try {
    Projectdb.destroy({ where: { id: req.params.id } });
    res.send(`Data dengan id: ${req.params.id} berhasil dihapus`);
  } catch (error) {
    console.error(error.message);
  }
};
