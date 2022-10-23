import { prisma } from "../utils/prisma";

class LogService {
    static async createLog(
        tutorId: string,
        tutoringTypeId: number,
        duration: number,
        description: string,
    ) {
        console.log(`LogService.createLog() called - tutoringTypes=${tutoringTypeId}, duration=${duration}, description=${description}`);

        const log = await prisma.tutoringSession.create({
            data: {
                duration,
                description,
                Tutor: {
                    connect: { id: tutorId }
                },
                TutoringType: {
                    connect: { id: tutoringTypeId },
                },
            }
        });

        return log;
    }

    static async deleteLog(
        tutoringSessionId: string,
    ) {
        console.log(`LogService.deleteLog() called - tutoringSessionId=${tutoringSessionId}`);

        const log = await prisma.tutoringSession.delete({
            where: {
                id: tutoringSessionId,
            },
        });

        return log;
    }
}

export default LogService;