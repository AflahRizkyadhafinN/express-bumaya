import express from "express";
import {
  deleteMasyarakat,
  getMasyarakat,
  getMasyarakatById,
  postMasyarakat,
  updateMasyarakat,
  getPetugas,
  getPetugasById,
  postPetugas,
  updatePetugas,
  deletePetugas,
} from "./controllers.js";

const router = express.Router();

router.get("/masyarakat", getMasyarakat);
router.get("/masyarakat/:nik", getMasyarakatById);
router.post("/masyarakat", postMasyarakat);
router.delete("/masyarakat/:nik", deleteMasyarakat);
router.patch("/masyarakat/:nik", updateMasyarakat);
router.get("/petugas", getPetugas);
router.get("/petugas/:id", getPetugasById);
router.post("/petugas/", postPetugas);
router.delete("/petugas/:id", deletePetugas);
router.patch("/petugas/:id", updatePetugas);

export default router;
