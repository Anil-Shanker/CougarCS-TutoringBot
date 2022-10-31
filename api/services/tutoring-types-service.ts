import { prisma } from "../utils/prisma";

class TutoringTypesService {
    static async getTutoringTypes() {
        console.log(`TutoringTypesService.getTutoringTypes() called`);

        const tutoringTypes = await prisma.tutoringType.findMany();

        return tutoringTypes;
    }
}

export default TutoringTypesService;