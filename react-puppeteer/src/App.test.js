// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  name: faker.name.firstName() + ' ' + faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
	let browser = await puppeteer.launch({args: ['--no-sandbox']});
	const page = await browser.newPage();

	await page.goto('http://localhost:3000/');
	await page.waitForSelector('.App-link');

	const html = await page.$eval('.App-link', e => e.innerHTML);
	expect(html).toBe("Learn React111");

	browser.close();
  }, 16000);
});
