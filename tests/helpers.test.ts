import test from 'ava';
import {stub} from 'sinon';
import * as settings from '../src/config';
import {getLecturesUrlPrefixes} from '../src/helpers';

let settingsStub;

test.beforeEach('stub settings', () => {
  settingsStub = stub(settings, 'getSettings');
});

test.afterEach('restore settings', () => {
  settingsStub.restore();
});

test('getLecturesUrlPrefixes returns an empty string whenever there are no lecture ids defined', t => {
  settingsStub.returns({
    lectureIds: []
  });
  const expectedUrlPrefixes = '';

  t.is(getLecturesUrlPrefixes(), expectedUrlPrefixes);
});

test('getLecturesUrlPrefixes returns a single url-prefix when one lecture id specified', t => {
  settingsStub.returns({
    lectureIds: [1]
  });
  const expectedUrlPrefixes = 'url-prefix("https://edux.pjwstk.edu.pl/mat/1/lec/main")';

  t.is(getLecturesUrlPrefixes(), expectedUrlPrefixes);
});

test('getLecturesUrlPrefixes returns comma-separated url-prefixes when more than one lecture id specified', t => {
  settingsStub.returns({
    lectureIds: [1, 2, 3]
  });
  const expectedUrlPrefixes = [
    'url-prefix("https://edux.pjwstk.edu.pl/mat/1/lec/main")',
    'url-prefix("https://edux.pjwstk.edu.pl/mat/2/lec/main")',
    'url-prefix("https://edux.pjwstk.edu.pl/mat/3/lec/main")',
  ].join(', ');

  t.is(getLecturesUrlPrefixes(), expectedUrlPrefixes);
});
