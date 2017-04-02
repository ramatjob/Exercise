//var Page  =  require('../pageObjects/Page')

    var TopsPage = {
	
	   filter: "span.Filters-totalResults + button",
	   filterTypeColour: "//div[@class='PlpContainer-productListContainer']//span[contains(text(),'Colour')]",
	   blackFilter: "//div[@class='PlpContainer-productListContainer']//span[contains(text(),'black')]",
	   whiteFilter: "//div[@class='PlpContainer-productListContainer']//span[contains(text(),'white')]",
	   applyButton: "//div[@class='PlpContainer-productListContainer']//button[contains(text(),'Apply')]",
	   numberofFilters:"//button[@class='Button Filters-refineButton']/span",
	   clearFilter: "button.Refinements-clearButton", 
	   noOfProducts: "//h1[@class='PlpHeader']//span[@class='PlpHeader-total PlpHeader-totalValue']",
  
   
   clickOnFilter: function(){
            
            browser.click(TopsPage.filter) },
		
   colourFilter: function(filtertype){
            		
            if(filtertype == "Colour")
            {			
			
            browser.click(TopsPage.filterTypeColour)
			
			}
		},
			
   filterByColour: function(filterColour) {
   
          
			
            if( filterColour == "Black")
			{
                
                browser.click(TopsPage.blackFilter)	
            }
            if( filterColour == "White")
            {
			   
				browser.moveToObject(TopsPage.whiteFilter).click();
				
            }	
          } ,
		  
   applyFilter: function() {
   
          browser.click(TopsPage.applyButton)  },
		  
   numberOfAppliedFilters: function(expected) {
        
		   var actual = browser.getText(TopsPage.numberofFilters)
		   if(actual.charAt(0) == expected)
		   {
		     console.log("Test Pass");
		   }
		   else
		   {
		     
		     console.log("Test Fail")
			 console.log("expected "+expected)
			 console.log("Actual "+actual)
		   }
		   if(actual == "")
		   {
		      console.log("Filter removal Sucessful");
		   }
		   
		   },
    numberOfProducts: function(){
	    
		  // browser.waitForVisible(TopsPage.noOfProducts,5000);
		   var noProducts = browser.getText(TopsPage.noOfProducts)
		   console.log("Number of tops displayed after applying filters "+noProducts)
		   },
		   
    clearFilters: function(){
	
	       browser.click(TopsPage.clearFilter);
		   
		   }
			
   
}

module.exports = TopsPage;