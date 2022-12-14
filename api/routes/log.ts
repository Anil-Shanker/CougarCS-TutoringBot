import { Router } from "express";
import { body, query, validationResult } from "express-validator";

import LogService from "../services/log-service";

const router = Router();

/* GET /log/lastForTutor */

router.get(
    "/lastForTutor",
    query("discordId").isString().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const tutorId = req?.query?.discordId;

        try {
            const log = await LogService.selectLastLogForTutor(tutorId);
            return res.status(200).json({ log });
        }

        catch (err) {
            console.log(`LogService.selectLastLogForTutor() failed - Error=${err}`);
        }

        res.status(500).json({ message: "Unable to access resource" });
    }
);

/* POST /log */

router.post(
    "/",
    body("duration").isNumeric().notEmpty(),
    body("description").isString().notEmpty(),
    body("tutoringTypeId").isNumeric().notEmpty(),
    body("tutorId").isString().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { duration, description, tutoringTypeId, tutorId } = req.body;

        try {
            const log = await LogService.createLog(tutorId, tutoringTypeId, duration, description);
            return res.status(200).json({ log });
        } catch (err) {
            console.log(`LogService.createLog() failed - Error=${err}`);
            return res.status(500).json({ message: "Unable to add resource", error: err });
        }
    }
);

/* DELETE /log */

router.delete(
    "/",
    body("tutoringSessionId").isString().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { tutoringSessionId } = req.body;

        try {
            const log = await LogService.deleteLog(tutoringSessionId);
            return res.status(200).json({ log });
        }

        catch (err) {
            console.log(`LogService.deleteLog() failed - Error=${err}`);
        }

        res.status(500).json({ message: "Unable to delete resource" });
    }
)

export default router;

