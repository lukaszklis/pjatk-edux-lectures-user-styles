# User Styles for Edux Lectures @ [PJATK](http://www.pja.edu.pl) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20📖%20🛠-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me) [![Build Status](https://travis-ci.org/lukaszklis/pjatk-edux-lectures-user-styles.svg?branch=master)](https://travis-ci.org/lukaszklis/pjatk-edux-lectures-user-styles)

After becoming a student at PJATK, I was extremely disappointed with the readability of the lectures provided online.
Based on Medium’s typography settings I decided to improve Edux’s typography just a bit, so it would be possible to
read the materials at all.

## Dependencies

* Node `8.9.1`+
* yarn `v1.5.1`+ (suggested, however npm `5.6.0`+ is going to work as well)

## How to use

1. Clone this repository.
1. Install dependencies via: `yarn` (or `npm i`).
1. Create necessary config files via: `yarn run setup` (or `npm run setup`).
1. Add an array of lecture IDs to the just created `settings.yaml` file.
1. Generate your own copy of user styles: `yarn start` (or `npm start`).
1. Import the generated CSS file (`build/user-styles.css`) in your browser’s extension.
