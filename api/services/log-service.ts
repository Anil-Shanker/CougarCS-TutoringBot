import { prisma } from "../utils/prisma";

class LogService {
    static async selectLastLogForTutor(
        tutorId: string,
    ) {
        console.log(`LogService.selectLastLogForTutor() called - tutorId=${tutorId}`);

        const logId = await prisma.tutoringSession.findFirst({
            where: {
                tutorId,
            },
            orderBy: [
                {
                    timestamp: 'desc'
                }
            ]
        });

        return logId;
    }

    static async createLog(
        tutorId: string,
        tutoringTypeId: number,
        duration: number,
        description: string,
    ) {
        console.log(`LogService.createLog() called - tutorId=${tutorId}, tutoringTypes=${tutoringTypeId}, duration=${duration}, description=${description}`);

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