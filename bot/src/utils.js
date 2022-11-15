class Utils {
    static tutoringTypeIdToDescription(tutoringTypeId) {
        // TODO: Fetch ID to description mappings from API
        switch (tutoringTypeId) {
            case 1:
                return 'Text';
            case 2:
                return 'Voice';
            case 3:
                return 'In-Person';
            default:
                return `Error: tutoringtypeId=${tutoringTypeId} unknown`;
        }
    }

    static formatDuration(duration) {
        if (duration === null || duration == 0 || isNaN(duration)) return "0 minutes";
        const h = Math.trunc(duration / 60);
        const m = duration % 60;

        const hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
        const mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";

        return hDisplay + mDisplay;
    }
}

module.exports = Utils;