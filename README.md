# Users Styles for Edux Lectures @ [PJATK](http://www.pja.edu.pl) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20📖%20🛠-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me)

After becoming a student at PJATK, I was extremely disappointed with the readability of the lectures provided online.
Based on Medium’s typography settings I decided to improve Edux’s typography just a bit, so it would be possible to
read the materials at all.

## Dependencies

* Node
* NPM

## How to use

1. Clone this repository
1. Run `npm i`
1. Add an array of course IDs to the just created `config.yaml` file (the _postinstall_ has just done it for you!)
1. Generate your own copy of user styles: `npm start`
1. Import the generated CSS file (`build/user-styles.css`) in your browser’s extension.
