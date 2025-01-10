# t2-puppeteer-plugin-random-ua

[![npm version](https://badge.fury.io/js/t2-puppeteer-plugin-random-ua.svg)](https://badge.fury.io/js/t2-puppeteer-plugin-random-ua)

## Description

A Puppeteer plugin for random user-agents.

This plugin helps you generate random user-agents for your Puppeteer scripts, making them more robust against detection by websites.

## Installation

```bash
npm install t2-puppeteer-plugin-random-ua
```

or using Yarn:

```bash
yarn add t2-puppeteer-plugin-random-ua


```


### Usage


```js
import puppeteer from 'puppeteer';
import randomUserAgent from 't2-puppeteer-plugin-random-ua';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Attach the plugin
  randomUserAgent(page);

  await page.goto('https://example.com');

  console.log(await page.evaluate(() => navigator.userAgent));

  await browser.close();
})();


```


### Usage with puppeteer-extra



```js

import puppeteerExtra from 'puppeteer-extra';
import randomUserAgent from 't2-puppeteer-plugin-random-ua';

puppeteerExtra.use(randomUserAgent());

(async () => {
  const browser = await puppeteerExtra.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');

  console.log(await page.evaluate(() => navigator.userAgent));

  await browser.close();
})();

```


