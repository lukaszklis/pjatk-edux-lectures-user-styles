import * as fse from 'fs-extra';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { Settings } from './interface/settings';

export const buildFilePath = path.resolve(__dirname, '../build/user-styles.css');
export const templateFilePath = path.resolve(__dirname, '../template/user-styles.template.css');

export function getSettings(): Settings {
  try {
    const settingsFilePath = path.resolve(__dirname, '../settings.yaml');

    return yaml.safeLoad(fse.readFileSync(settingsFilePath, 'utf8'));
  } catch (error) {
    throw new Error('Could not fetch the settings.yaml file. Make sure you’ve copied settings.yaml.dist and renamed it to settings.yaml.');
  }
}
