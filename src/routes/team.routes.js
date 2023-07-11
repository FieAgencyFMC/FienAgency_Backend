import { Router } from "express";
import { methods as teamController } from "../controllers/team.controller";

const router = Router();


router.get("/api/team", teamController.getTeams);

router.get("/", teamController.getTeams);
router.get("/:id", teamController.getTeam);
router.post("/", teamController.addTeam);
router.put("/:id", teamController.updateTeam);
router.delete("/:id", teamController.deleteTeam);

export default router;