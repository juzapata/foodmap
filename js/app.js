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
      // função para colocar marcador no mapa
	  var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(restaurantsLoop.latitude, restaurantsLoop.longitude),
	    title: "Eai, qual você vai escolher? Esse é bom hein!",
	    map: map
	});
	// pegando informaçõs no data e html
    var images = restaurantsLoop.image;
	var type = restaurantsLoop.type;
	var inputValue = $('.food-input').val();
	var descriptions = restaurantsLoop.description;	
	var names = restaurantsLoop.name;
	// colocando as imagens
	$(".restaurantes").append($("<img>").attr("src", restaurantsLoop.image).attr('id', restaurantsLoop.name).addClass(restaurantsLoop.type).append(restaurantsLoop.type));
	// função para desaparecer restaurantes não selecionados
    $(".filter").click(function() {
      var inputValue = $('.food-input').val();
      $("img").each(function () {
        if($(this).text() !== inputValue){
          $(this).fadeOut('slow');	  
        }	
      });
    });
    // função para reaparecer as imagens
	$('.food-input').on('input', function() {
	  if($(this).val() === ""){
		$('img').each(function(){
		  $(this).fadeIn('slow');	
		});  
	  }
    }); 
    // função para aparece modal
	$("img").click(function(){
		  $(this).each(function (){
			  // alert(restaurantsLoop.description);
			  $(".window-popup").show(300);
		  });	
			  });
      
    });
  } 
  // chamand a função
  putPin();
  // coloquei a classe para setar i layout das imagens
  $("img").each(function (){
    $(this).addClass("img-set");	  
  });  

  // function showModal (){
    // $.each(restaurantes, function(index, restaurantsLoop) {
	  
	  // 
	
	// });  
  // }  
  
});
  
 
