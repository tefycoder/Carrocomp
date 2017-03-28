$(document).ready(function(){
	// tu codigo va acá
	 $('[data-toggle="tooltip"]').tooltip(); 
	//  $("#myModal").modal(); aparece al cargar la pagina
	var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(-33.437411, -70.650146),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  		}
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//validacion de origen
function validarSelect(input){
	var mensaje = "";
	var bool = true;
	if($("select").val()== ""){
		mensaje += "Selecciona una ruta" 
		bool = false
	}
	$(input).siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj1(mensaje,input);
		return bool
};
// mensaje
function mostrarMsj1(mensaje, input){
	if(mensaje == ""){
		return;
	}
	var span_ruta = $("<span>" + mensaje + "</span>");
	$('select').parent().append(span_ruta);
}


$("#search2").on("click",function(e){
	if(validarVehiculo() == true){
		$("#modal").toggle;
	}else{
		alert("Complete los datos");
		}

});
//boton busqueda 
$("#search").on("click",function(e){
	e.preventDefault()
	if(validarSelect() == true){
		$("#carro").removeClass("hidden");
		$("#search2").removeClass("hidden");
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
		console.log(google.maps)
//ruta mapa
var request = {
 origin: $('#origen').val(),
 destination: $('#destino').val(),
 travelMode: google.maps.DirectionsTravelMode.DRIVING,
 unitSystem: google.maps.DirectionsUnitSystem.METRIC,
 provideRouteAlternatives: true
 };
directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setMap(map);
        //directionsDisplay.setPanel($("#panel_ruta").get(0));
        directionsDisplay.setDirections(response);
        console.log(response.routes[0].legs[0].distance.text)
//valor del viaje
        var km = response.routes[0].legs[0].distance.text;
        var valor = parseInt(km.substring(0, km.indexOf(' ')));
        
        	console.log(km, valor)
        $('.precioMoto').html('')
        $('.precioMoto').html(parseInt(valor/21*673))
        $('.precioAuto').html('')
        $('.precioAuto').html(parseInt(valor/12*673))
        $('.precioVan').html('')
        $('.precioVan').html(parseInt(valor/7*673))
        $('.precioCamion').html('')
        $('.precioCamion').html(parseInt(valor/6*673))

    } else {
            console.log(response);
    }
});		
	}
});

});











