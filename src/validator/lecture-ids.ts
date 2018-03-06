import { getSettings } from '../config';

export function validateLectureIds(): void {
    const { lectureIds } = getSettings();

    if (!lectureIds) {
        throw Error('"lectureIds" parameter not found in settings.yaml file! Please make sure you have entered one.');
    }

    if (!lectureIds.length) {
        throw Error('"lectureIds" is empty, nothing to do here!');
    }
}
