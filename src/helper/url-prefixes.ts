import { getSettings } from '../config';

export function getLecturesUrlPrefixes(): string {
    const { lectureIds } = getSettings();

    return lectureIds.map((lectureId) => `url-prefix("https://edux.pjwstk.edu.pl/mat/${lectureId}/lec/main")`).join(', ');
}
