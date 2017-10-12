const getConfig = require('./get-config');

function validateLectureIds() {
  const {
    lectureIds
  } = getConfig();

  if (!lectureIds) {
    throw Error('"lectureIds" parameter not found in config.yaml file! Please make sure you have entered one.');
  }

  if (lectureIds.length === 0) {
    throw Error('"lectureIds" is empty, nothing to do here!');
  }
}

module.exports = validateLectureIds;
