

var homepage  = require('../../pageObjects/homepage')

module.exports = function () {

    this.Given(/^I am on the landing page$/, homepage.gotoPage)
	
    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)
	
   // this.Given(/^I am viewing product list tops$/,homepage.gotoProductList)
}