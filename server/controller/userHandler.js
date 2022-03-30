import UserModel from "../schema/UserSchema.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  const val1 = await UserModel.find({ username: username });
  const val2 = await UserModel.find({ email: email });

  if (val1.length > 0) {
    res.send("username is not available");
    return;
  }
  if (val2.length > 0) {
    res.send("email is already registered");
    return;
  }

  const plaintext = req.body.password;
  const plaintext2 = req.body.rep_password;
  if (plaintext === plaintext2) {
  } else {
    res.send("password error");
    return;
  }

  bcrypt.hash(plaintext, 10, async function (err, hash) {
    const userData = {
      username: username,
      email: email,
      passwordHash: hash,
    };
    const User = new UserModel(userData);
    await User.save();
    console.log("User registered");
  });

  res.send("User created");
};

const login = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const plaintext = req.body.password;

  const user = await UserModel.find({ username: username, email: email });

  const hash = user[0].passwordHash;

  bcrypt.compare(plaintext, hash, function (err, result) {
    // result == true
    if (result) {
      console.log("login successful");
      res.send("login successful");
    } else {
      console.log("Wrong credentials");
      res.send("Wrong credentials");
    }
  });
};

const getUserID = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  const user = await UserModel.find({ username: username, email: email });

  res.send(user[0]._id.toString());
};

export { register, login, getUserID };
