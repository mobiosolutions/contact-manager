/* load require packages */
const mongoose = require("mongoose");
const passport = require("passport");

/* load require models */
const User = mongoose.model("User");

/* signup user */
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    /* validation of fields */
    if (!name) {
      return res.status(204).json({ message: "Name can't be empty" });
    }
    if (!email) {
      return res.status(204).json({ message: "Email can't be empty" });
    }
    if (!password) {
      return res.status(204).json({ message: "Password can't be empty" });
    } else if (password.length < 4) {
      return res.status(400).json({ message: "Password must be atleast 4 character" });
    }

    /* check user is exist or not */
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(409).json({
        message: "User already exist"
      });
    }

    /* if user doesn't exist it creates or register new user */
    const user = await new User({ name, email });
    await User.register(user, password, (err, user) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      res.status(200).json({username: user.name, message: 'User sign up successfully.'});
    });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

/* user signin with passport local strategy authentication */
exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    if (!user) {
      return res.status(400).json({message: info.message});
    }
    req.logIn(user, err => {
      if (err) {
        return res.status(500).json({message: err.message});
      }
      res.status(200).json({user: user});
    });
  })(req, res, next);
};

/* sign out and clear cookies from server */
exports.signout = (req, res) => {
  res.clearCookie("next-cookie.sid");
  req.logout();
  res.status(200).json({ message: "you are now signed out" });
};

/* check user is authenticated or not */
exports.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).json({ message: "Please login first" });
  //   res.redirect("/signin");
};
