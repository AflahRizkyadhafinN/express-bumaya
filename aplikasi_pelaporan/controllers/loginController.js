import masyarakatDb from "../models/masyarakat.js";
import crypto from "crypto";

export const login = async (req, res) => {
  function calculateSHA256Hash(data) {
    const sha256Hash = crypto.createHash("sha256");
    sha256Hash.update(data);
    return sha256Hash.digest("hex");
  }

  const hash = calculateSHA256Hash(req.body.password);
  console.log(hash);
  try {
    const response = await masyarakatDb.findOne({
      where: { username: req.body.username, password: hash },
    });
    res.json({ response, msg: "Login berhasil" });
  } catch (e) {
    console.error(e.message);
  }
};
