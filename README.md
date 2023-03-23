# google-apps-script-typescript-boilerplate

Boilerplate template for developing a [Google Apps Script](https://script.google.com/) project that supports [TypeScript](https://www.typescriptlang.org/).

This README is written for [*NIX-like](https://en.wikipedia.org/wiki/Unix) environments; however, it is likely applicable to other platforms.

## Prerequisites

### [Node.js](https://nodejs.org/)

[Install Node.js](https://nodejs.org/en/download/) for your environment.

### [npm](https://www.npmjs.com/)

`npm` is distributed with Node.js. For further readings, see [this `npm` page](https://www.npmjs.com/get-npm).

### [clasp](https://github.com/google/clasp)

Install `clasp` by running:

``` sh
npm install --global @google/clasp
```

Authenticate `clasp` with your Google Account by running:

``` sh
clasp login
```

## Getting started

1. Clone this repository
2. Install dependencies

    ``` sh
    npm install
    ```

3. Create a new Apps Script project

    ``` sh
    clasp create --type standalone --title google-apps-script-typescript-boilerplate
    ```

4. Compile all source files

    All TypeScript and JavaScript in `src/` will be `webpack`ed into `dist/`

    This repository comes with a `helloWorld` function by default

    ``` sh
    npm run build
    ```

5. Push to Apps Script

    Push all tracked files (see `.claspignore`) to Apps Script

    ``` sh
    clasp push
    ```

6. Verify the code was pushed in the Apps Script editor

    ``` sh
    clasp open
    ```

7. Run the `helloWorld` function

## Using `clasp run`

> `clasp run [functionName]` allows you to execute Apps Script functions remotely.

`clasp run` is initially rather troublesome to set up.

The Apps Script project must use a standard Google Cloud Platform Project. For more information, see the [documentation on GCP Projects and Apps Script](https://developers.google.com/apps-script/guides/cloud-platform-projects).

The standard GCP Project must also have an [OAuth 2.0](https://oauth.net/2/) client ID. For more information, see the [GCP help article on Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849).

Assuming both a standard GCP project and OAuth 2.0 client ID has been configured, [this document](https://github.com/google/clasp/blob/master/docs/run.md) can be followed to configure `clasp run`.
