import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
   try {
       console.log("parametros",req.params)
    const token = req.headers["x-access-token"];
    console.log(token);
    if(!token) return res.status(403),json({message:"No token provided"})

    const decoded = jwt.verify(token,config.SECRET)
    req.userId = decoded.id;
    const user = await User.findById(req.userId, {password: 0})
    console.log(user);
    if (!user) return res.status(404).json({message: 'no user found'})
    next()
   } catch (error) {
      return res.status(401).json({message: 'Unauthorized'})
   }
}

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for (let index = 0; index < roles.length; index++) {
        if(roles[index].name === 'moderator'){
            next()
            return;
        }
        
    }
    return res.status(403).json({message:'Require moderator role'})
}
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for (let index = 0; index < roles.length; index++) {
        if(roles[index].name === 'admin'){
            next()
            return;
        }
        
    }
    return res.status(403).json({message:'Require Admin role'})
}