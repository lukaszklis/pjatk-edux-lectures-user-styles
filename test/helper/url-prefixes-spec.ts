import * as config from '../../src/config';
import { getLecturesUrlPrefixes } from '../../src/helper/url-prefixes';

describe('getLecturesUrlPrefixes', () => {
    it('returns an empty string whenever there are no lecture ids defined', () => {
        spyOn(config, 'getSettings').and.returnValue({lectureIds: []});
        expect(getLecturesUrlPrefixes()).toEqual('');
    });

    it('returns a single url-prefix when one lecture id specified', () => {
        spyOn(config, 'getSettings').and.returnValue({lectureIds: [1]});
        expect(getLecturesUrlPrefixes()).toEqual('url-prefix("https://edux.pjwstk.edu.pl/mat/1/lec/main")');
    });

    it('returns comma-separated url-prefixes when more than one lecture id specified', () => {
        const expectedUrlPrefixes = [
            'url-prefix("https://edux.pjwstk.edu.pl/mat/1/lec/main")',
            'url-prefix("https://edux.pjwstk.edu.pl/mat/2/lec/main")',
            'url-prefix("https://edux.pjwstk.edu.pl/mat/3/lec/main")',
        ].join(', ');

        spyOn(config, 'getSettings').and.returnValue({lectureIds: [1, 2, 3]});
        expect(getLecturesUrlPrefixes()).toEqual(expectedUrlPrefixes);
    });
});
