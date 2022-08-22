const User = require("../models/User");

// handle errors

const handleErrors = (err) => {
  let error = { email: "", password: "" };

  //duplicate error code

  if (err.code === 11000) {
    error.email = "This Email is already registered";
    return error;
  }
  //validation errors

  if (err.message.includes("user validation failed:")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    res.status(201).json(user);
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  res.send("user login");
};
