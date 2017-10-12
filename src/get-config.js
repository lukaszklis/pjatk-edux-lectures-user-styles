const fse = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

function getConfig() {
  try {
    const configPath = path.resolve(__dirname, '../config.yaml');

    return yaml.safeLoad(fse.readFileSync(configPath, 'utf8'));
  } catch (error) {
    throw new Error('Could not fetch the config.yaml file. Make sure you’ve copied config.yaml.dist and renamed it to config.yaml.');
  }
};

module.exports = getConfig;
