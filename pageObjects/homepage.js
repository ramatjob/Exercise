var homepage = {

    brandLogo: ".BrandLogo-img",
	product_Tops: "a.ImageList-link img",
	
	 
   gotoPage: function ()   {
   
          browser.url('/')
		  browser.windowHandleMaximize() 
		  } ,
		  
   hasLogo: function() {
   
          browser.isVisible(homepage.brandLogo)
		  } ,
		  
   gotoProductList: function() {
   
          browser.url('/')
          browser.click(homepage.product_Tops) 
		  
		  }    

}
module.exports = homepage;
