import { Router } from "express";

import TutoringTypesService from "../services/tutoring-types-service";

const router = Router();

/* GET /tutoringTYpes */

router.get(
    "/",
    async (req, res) => {
        try {
            const tutoringTypes = await TutoringTypesService.getTutoringTypes();
            return res.status(200).json({ tutoringTypes });
        } catch (err) {
            console.log(`TutoringTypesService.getTutoringTypes() failed - Error=${err}`);

        }

        return res.status(500).json({ message: "Unable to load resource" });
    }
);

export default router;