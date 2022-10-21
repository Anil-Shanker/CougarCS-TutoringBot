import { prisma } from "../utils/prisma";

class RegisterService {
    static async createRegistration(
        user_id: string
    ) {
        console.log(`RegisterService.createRegistration() - user_id=${user_id}`);

        const registration = prisma.tutor.create({
            data: {
                tutor_id: user_id
            },
        });

        return registration;
    }
}

export default RegisterService;