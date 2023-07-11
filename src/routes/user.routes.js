import { Router } from "express";
import { methods as userController } from "../controllers/user.controller";

const router = Router();


router.get("/api/user", userController.getUsers);

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;