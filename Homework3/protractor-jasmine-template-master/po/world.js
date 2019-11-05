'use strict';

const HomePage = require('./pages/HomePage');
const ContactPage = require('./pages/ContactPage');

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.HomeUrl = `^${browser.baseUrl}$`;

		this.ContactPage = new ContactPage();
		this.ContactUrl = `${browser.baseUrl}contact/`;
	}
}

module.exports = new World();