const fse = require('fs-extra');
const path = require('path');
const replaceInFile = require('replace-in-file');

const getConfig = require('./get-config');

const templateFilePath = path.resolve(__dirname, 'templates/user-styles.template.css');
const buildFilePath = path.resolve(__dirname, '../build/user-styles.css');

function getUrlPrefixes() {
  const {
    lectureIds
  } = getConfig();

  return lectureIds.map(lectureId => `url-prefix("https://edux.pjwstk.edu.pl/mat/${lectureId}/lec/main")`).join(', ');
}

function createFromTemplate() {
  fse.copy(templateFilePath, buildFilePath, (error) => {
    if (error) {
      throw new Error('Could not copy the source file into the given destination');
    }

    const options = {
      files: buildFilePath,
      from: /URL_PREFIXES/g,
      to: getUrlPrefixes(),
      encoding: 'utf8'
    };

    replaceInFile(options)
      .then(() => console.log('Build finished successfully!'))
      .catch(error => console.error(error));
  });
}

module.exports = createFromTemplate;
