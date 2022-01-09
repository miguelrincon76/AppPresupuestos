import User from "../models/User";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  try {
    console.log('createuser', req.body)
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find({}, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log(docs)
      return res.status(200).json(docs)
    }

  })
};
export const updateUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const rolesFound = await Role.find({ name: { $in: roles } });
    const encryptedPassword = await User.encryptPassword(password);
    User.findByIdAndUpdate(req.params.id, { username, email, password:encryptedPassword, roles: rolesFound.map((role) => role._id), },
      function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Updated User : ", docs);
          res.status(204).json("Updated user")
        }
      });

  } catch (error) {
    console.log(error);
  }


}

export const deleteUser = async (req, res) => {
  try {
    User.findByIdAndDelete(req.params.id, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Deleted : ", docs);
          return res.status(200).json("Deleted user")
      }
  });
  } catch (error) {
    console.log(error)
  }


};
