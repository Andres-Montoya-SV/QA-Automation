# QA-Automation Project

This project contains automated tests for the Focus Services website using WebdriverIO and Mocha.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Project Structure](#project-structure)

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (version 16 or later)
- [npm](https://www.npmjs.com/get-npm) (included with Node.js)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Andres-Montoya-SV/QA-Automation.git
```

2. Navigate to the project directory:
```bash
cd QA-Automation
```


3. Install the project dependencies:
```bash
npm i
```


## Running Tests

To run the tests, execute the following command in your terminal:

```bash
npx wdio wdio.conf.js
```


This command will run the test suite, and you'll see the test results in the terminal.

## Project Structure

- `test/` - Contains the test suite, including the following:
  - `pages/` - Contains the page object classes for Google and Focus Services.
  - `specs/` - Contains the test specifications (test cases).
- `README.md` - This file, which contains an overview and instructions for the project.
- `wdio.conf.js` - WebdriverIO configuration file.

