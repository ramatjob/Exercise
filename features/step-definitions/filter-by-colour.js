var topsPage  = require('../../pageObjects/TopsPage')
var homepage  = require('../../pageObjects/homepage')

module.exports = function () {
    
    this.Given(/^I am viewing product list tops$/,homepage.gotoProductList)
   
	this.Given(/^I filter the product list$/,topsPage.clickOnFilter),
	
	this.Given(/^I filter by option "([^"]*)"$/,(filterType) => {
	
	          topsPage.colourFilter(filterType);
			  
			  
	})
			
	this.Given(/^I select colour "([^"]*)"$/,(filterColour)=> {
	
	topsPage.filterByColour(filterColour);
	
	})
		   
    this.When(/^I apply these filters$/,topsPage.applyFilter)
	 
	this.Then(/^Filter button has (\d+) filter$/,(number) => {
	
	        topsPage.numberOfAppliedFilters(number)
	})
	
	this.Then(/^Filter returns a product list$/,topsPage.numberOfProducts)
	
	this.Given(/^I clear all filters$/,topsPage.clearFilters)
	
	this.Then(/^Filter button has no filters$/,topsPage.numberOfAppliedFilters)
}