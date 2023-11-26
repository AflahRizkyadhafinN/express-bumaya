import masyarakatDb from "../models/masyarakat.js";
import petugasDb from "../models/petugas.js";
import crypto from "crypto";

export const login = async (req, res) => {
  function calculateSHA256Hash(data) {
    const sha256Hash = crypto.createHash("sha256");
    sha256Hash.update(data);
    return sha256Hash.digest("hex");
  }

  const hash = calculateSHA256Hash(req.body.password);
  console.log(hash);
  let msg = "";
  let response = {};
  try {
    response = await masyarakatDb.findOne({
      where: { username: req.body.username, password: hash },
    });
    if (response != null) {
      res.json({ response, msg: "Login masyarakat berhasil" });
    } else {
      res.json({
        msg: `data dengan username ${req.body.username} tidak terdaftar`,
      });
    }
  } catch (e) {
    console.error(e.message);
  }
};
