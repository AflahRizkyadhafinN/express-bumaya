import express from "express";
import {
  getPengaduan,
  postPengaduan,
  deletePengaduan,
  getPengaduanById,
  updatePengaduan,
} from "./controllers/pengaduanController.js";
import {
  getPetugas,
  getPetugasById,
  postPetugas,
  updatePetugas,
  deletePetugas,
} from "./controllers/petugasController.js";
import {
  getMasyarakat,
  getMasyarakatById,
  postMasyarakat,
  deleteMasyarakat,
  updateMasyarakat,
} from "./controllers/masyarakatController.js";
import { login } from "./controllers/loginController.js";
import {
  deleteTanggapan,
  getTanggapan,
  getTanggapanById,
  postTanggapan,
  updateTanggapan,
} from "./controllers/tanggapanController.js";

const router = express.Router();

// Login
router.post("/login", login);

// Masyarakat
router.get("/masyarakat", getMasyarakat);
router.get("/masyarakat/:nik", getMasyarakatById);
router.post("/masyarakat", postMasyarakat);
router.delete("/masyarakat/:nik", deleteMasyarakat);
router.patch("/masyarakat/:nik", updateMasyarakat);

// Petugas
router.get("/petugas", getPetugas);
router.get("/petugas/:id", getPetugasById);
router.post("/petugas/", postPetugas);
router.delete("/petugas/:id", deletePetugas);
router.patch("/petugas/:id", updatePetugas);

// Pengaduan
router.get("/pengaduan", getPengaduan);
router.get("/pengaduan/:id", getPengaduanById);
router.post("/pengaduan", postPengaduan);
router.patch("/pengaduan/:id", updatePengaduan);
router.delete("/pengaduan/:id", deletePengaduan);

// Tanggapan
router.get("/tanggapan", getTanggapan);
router.get("/tanggapan/:id", getTanggapanById);
router.post("/tanggapan", postTanggapan);
router.patch("/tanggapan/:id", updateTanggapan);
router.delete("/tanggapan/:id", deleteTanggapan);

export default router;
