const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const usersModel = mongoose.model("users"); //import the model

  const { username, email, confirmEmail, password, confirmPassword } = req.body;

  if (!username) throw "No name";
  if (!password) throw "No password";
  if (email !== confirmEmail) throw "Emails do not match";
  if (password !== confirmPassword) throw "Passwords do not match";

  const getDupEmail = await usersModel.findOne({ email });
  if (getDupEmail) throw "This Email Exists";

  const hashedPW = await bcrypt.hash(password, 6);

  const createdUser = await usersModel.create({
    username,
    email,
    password: hashedPW,
    balence: 0,
  });

  res.status(200).json({
    status: "success on register",
    user: {
      id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
    },
  });
};

module.exports = signup;
