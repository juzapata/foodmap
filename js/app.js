// Add your JavaScript
$(document).ready(function() {
  $('.box-two').delay('5000').fadeIn('slow');	
  
  var map;
  // função de colocar o mapa;
  function initialize() {
    var latlng = new google.maps.LatLng(-23.5576364, -46.6644888);
    var options = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), options);
  }
  initialize();
  function putPin(){
    $.each(restaurantes, function(index, restaurantsLoop) { 
      var marker = new google.maps.Marker({
	  position: new google.maps.LatLng(restaurantsLoop.latitude, restaurantsLoop.longitude),
	  title: "Eai, qual você vai escolher? Esse é bom hein!",
	  map: map
	  });
    var images = restaurantsLoop.image;
	
	var type = restaurantsLoop.type;
	var inputValue = $('.food-input').val();
	
	 $(".restaurantes").append($("<img>").attr("src", restaurantsLoop.image).attr('id', restaurantsLoop.name).addClass(restaurantsLoop.type).append(restaurantsLoop.type));
     
 
 $(".filter").click(function() {
  var inputValue = $('.food-input').val();
  
  $("img").each(function () {
  if($(this).text() !== inputValue){
    $(this).fadeOut('slow');	  
  }	
});

  });
    $('.food-input').on('input', function() {
	  if($(this).val() === ""){
		$('img').each(function(){
		  $(this).fadeIn('slow');	
		});  
	  }
  }); 
  
  });
 
 }

  putPin();

  $("img").each(function (){
    $(this).addClass("img-set");	  
  });  

});
  
   // $('.filter').click(function() {
    // type.each(function () {
    // if(type.value !== inputValue){
      // type.fadeOut('slow');	  
    // }	
  // });
// }); 
  
 // $('.choice').on('input', function() {
    // if($(this).val() === ""){
	  // $('li').each(function(){
	    // $(this).fadeIn('slow');	
		// });  
	  // }
  // });  
