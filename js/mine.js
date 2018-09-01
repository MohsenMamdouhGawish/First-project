
var typed = new Typed('.element', {
  strings: ["Mohsen Gawish", "Amr Gaber","Nesma Hassan","Mahmoud Saeed","Wael Hamada"],
  typeSpeed: 150,
    loop:true
});

// start member 1 
$(document).ready( function ()
{
  $('.thumbnile img').on('click',function(){
  $(this).addClass('selected').siblings().removeClass('selected');
	  $('.img-content img').attr('src',$(this).attr('src'));
	 
  })  
	 
  $('.img-content .fa-arrow-circle-right').click(function(){
	  
	  if($('.thumbnile .selected').is(':last-child')){
		  $('.thumbnile img').eq(0).click();
		  		  
	  }
	  else{
	  $('.thumbnile .selected').next().click();
	  }
  })
	
	$('.img-content .fa-arrow-circle-left').click(function(){
		
		if($('.thumbnile .selected').is(':first-child')){
		 $('.thumbnile img').eq(2).click();	
		}
		else{
	  
	  $('.thumbnile .selected').prev().click();
			}
  }) 
	
	$('.fa-angle-right').click(function(){
		$(this).toggleClass('fa-angle-right fa-angle-down');
		
	})
});
// End of member 1












