# Pandas-Playwright-Playground

This is my Playwright playground

automation e2e tests for `http://skleptest.pl/`

## Project requirements

1. [Node 18+](https://nodejs.org/en/docs/)
2. optional [yarn](https://yarnpkg.com/package/doc)

## How to setup the Project

1. Clone repository
2. Enter the project directory and execute `npm install` in order to install all the packages
3. `yarn` can be used as an alternative

## Install Playwright with npm

1. npm install @playwright/test
2. npx playwright install

## Starting e2e test execution

- basic test execution: `npx playwright test --headed` where `tests/e2e` is a deafult directory
- run tests using npm with chromium: `npm run tests:chrome` that uses default `tests/e2e` directory
- also works for `tests:firefox` and `tests:webkit`
- test directory can be changed in `playwright.config.ts`
- it is possible to add more flags with `-- --flag`
- run tests with reporter: `npx playwright test --reporter=html` or `reporter.ts` for CI custom one

## Visual regression tests

- run `npx playwright test --config=visual.config.ts`
- it will fail on first run as it has to save actual shapshots that can be used for comparison
- update snapshots `npx playwright test --config=visual.config.ts --update-snapshots`
- generate custom screenshots with `npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 http://skleptest.pl/ testshop-iphone-image.png`

## API tests

Simple API tests using `https://reqres.in/`, `https://jsonplaceholder.typicode.com/` or `https://httpbin.org/`

- run `npx playwright test --config=api.config.ts`

## Visual PDF tests

- `npm run test:pdf`

Using [compare-pdf](https://www.npmjs.com/package/compare-pdf)

```
sudo apt-get install graphicsmagick
sudo apt-get install imagemagick
sudo apt-get install ghostscript
```

In order to use ImageMagic `policy.xml` modification is needed
Use `sudo chmod 777 ~/etc/ImageMagick-6/policy.xml` and modify `policy.xml` as follows:
change `rights="none"` to `rights"read|write"` in line `<policy domain="module" rights="read|write" pattern="PDF" />`

## PDF content tests

- `npm run test:pdf`
- package used: [pdf2json](https://www.npmjs.com/package/pdf2json)
- this is why `Node 18+` is needed

## Debugging

- use `--debug` while debugging

## Allure reporting

- install [Allure for Playwright](https://github.com/allure-framework/allure-js/blob/master/packages/allure-playwright/README.md)
- install command line for Allure `npm install -g allure-commandline`
- install JAVA `sudo apt install default-jdk`
- configure JAVA `update-alternatives --config java`
- open `sudo nano /etc/environment`
- add `JAVA_HOME="/lib/jvm/java-11-openjdk-amd64/"` at the end of the file
- save and force envs to reload `source /etc/environment`
- check envs with `echo $JAVA_HOME`
- generate report `allure generate allure-results -o allure-report --clean`
- open Allure report `allure open allure-report`

## Lighthouse

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/#cli) is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.

To run Lighhouse use `npm run lighthouse` command, reports will be generated in html format in root directory with name "LighthouseReport.html"

To run Playwright test runner with Lighthouse test use `npm run tests:audit` command

## Artillery

[Artillery](https://github.com/artilleryio/artillery-engine-playwright) is a powerful tool to perform load tests. This engine a.lows us to combine Playwright with Artillery to be able to launch a whole lot of real browsers to do full browser load testing.

To run Artillery use `artillery run ./tests/artillery/artillerySklepTest.yml` command for simple load tests of `skleptest.pl`
