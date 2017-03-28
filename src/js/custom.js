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

// Valida origen y destino 
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
//ruta del mapa 
var request = {
 origin: $('#origen').val(),
 destination: $('#destino').val(),
 travelMode: google.maps.DirectionsTravelMode.DRIVING,
 unitSystem: google.maps.DirectionsUnitSystem.METRIC,
 provideRouteAlternatives: true
 };





