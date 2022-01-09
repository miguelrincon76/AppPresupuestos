import User from "../models/User";
import { ROLES } from "../models/Role";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    console.log('req.body:', req.body)
    console.log('username',req.body.userName)
    console.log('email',req.body.email)
    
    const user = await User.findOne({ username: req.body.username });
    console.log('user',user)
    if (user)
      return res.status(202).json({ message: "The user already exists" });
    const email = await User.findOne({ email: req.body.email });
    console.log('email',email)
    if (email)
      return res.json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        });
      }
    }
  }

  next();
};

export { checkDuplicateUsernameOrEmail, checkRolesExisted };