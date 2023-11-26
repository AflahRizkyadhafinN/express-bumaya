import axios from "axios";

export const LoginController = async (email, password) => {
  try {
    await axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((value) => console.log(value.data.accessToken));
  } catch (error) {}
};

export const RegisterController = async (name, email, password, cPassword) => {
  try {
    await axios
      .post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: cPassword,
      })
      .then((value) => console.log(value));
  } catch (error) {
    () => console.error(error);
  }
};
