import { Router } from "express";
import { body, validationResult } from "express-validator";

import RegisterService from "../services/register-service";

const router = Router();

/* POST /register */

router.post(
    "/",
    body("discordId").isString().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { discordId } = req.body;

        try {
            const registration = await RegisterService.createRegistration(discordId);
            return res.status(200).json({ registration });
        } catch (err) {
            console.log(`RegisterService.createRegistration() failed - Error=${err}`);
        }

        res.status(500).json({ message: "Unable to load resource" });
    }
);

export default router;