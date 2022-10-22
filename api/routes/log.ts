import { Router } from "express";
import { body, validationResult } from "express-validator";

import LogService from "../services/log-service";

const router = Router();

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
            const log = LogService.createLog(tutorId, tutoringTypeId, duration, description);
            return res.status(200).json({ log });
        } catch (err) {
            console.log(`RegisterService.createRegistration() failed - Error=${err}`);
        }

        res.status(500).json({ message: "Unable to load resource" });
    }
);

export default router;

