import { prisma } from "../utils/prisma";

class RegisterService {
    static async createRegistration(
        discordId: string
    ) {
        console.log(`RegisterService.createRegistration() called - discordId=${discordId}`);

        const registration = await prisma.tutor.create({
            data: {
                id: discordId
            },
        });

        return registration;
    }
}

export default RegisterService;