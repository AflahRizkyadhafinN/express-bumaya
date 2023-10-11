import Users from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken);
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user) return res.sendStatus(403);
    console.log(user);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const userId = user.id;
        const name = user.name;
        const email = user.email;
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.error(error);
  }
};
