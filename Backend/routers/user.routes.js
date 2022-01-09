import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/user",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);
router.post(
  "/users",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  usersCtrl.getUsers
);
router.put(
  "/update:id",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  usersCtrl.updateUser
);
router.delete(
  "/delete:id",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  usersCtrl.deleteUser
);

export default router;
