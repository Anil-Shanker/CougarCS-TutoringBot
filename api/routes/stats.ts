import { Router } from "express";
import { query, validationResult } from "express-validator";
import StatsService from "../services/stats-service";

const router = Router();

/* GET /stats */

router.get(
    "/",
    query("discordId").isString().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const discordId = req?.query?.discordId;

        try {
            const stats = await StatsService.getStats(discordId);
            return res.status(200).json({ stats });
        } catch (err) {
            console.log(`StatsService.getStats() failed - Error${err}`);
            return res.status(500).json({ message: "Unable to load resource", error: err });
        }
    }

);

export default router;