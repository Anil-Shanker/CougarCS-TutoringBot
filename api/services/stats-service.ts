import { prisma } from "../utils/prisma";

class StatsService {
    static async getStats(
        discordId: string,
    ) {
        console.log(`StatsService.getStats() called - discordId${discordId}`);

        const stats = await prisma.tutoringSession.groupBy({
            by: ['tutoringTypeId'],
            where: {
                tutorId: discordId,
            },
            _sum: {
                duration: true,
            },
        });

        return stats;
    }
}

export default StatsService;