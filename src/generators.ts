import * as fse from 'fs-extra';
import * as rif from 'replace-in-file';
import {buildFilePath, templateFilePath} from './config';
import {getLecturesUrlPrefixes} from './helpers';

export function generateLecturesUserStyles(): void {
  fse.copy(templateFilePath, buildFilePath, (error: Error | null) => {
    if (error) {
      throw new Error('Could not copy the source file into the given destination');
    }

    const options = {
      files: buildFilePath,
      from: /URL_PREFIXES/g,
      to: getLecturesUrlPrefixes(),
      encoding: 'utf8'
    };

    rif(options)
      .then(() => console.log('Build finished successfully!'))
      .catch(console.error);
  });
}
