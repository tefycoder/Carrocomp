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
 //  var precioTOTAL=0;		 
   //var precioTOTAL=0;
  // var dis1= localStorage.getItem("origen");		 
  // var dis1= localStorage.getItem("origen");
  // var dis2= localStorage.getItem("destino");		  var dis2= localStorage.getItem("destino");
  // var distanciaTOTAL=parseInt(dis1)-parseInt(dis2);		 +var distanciaTOTAL=parseInt(dis1)+parseInt(dis2);
  //  if (distanciaTOTAL<0){		
  //     distanciaTOTAL= distanciaTOTAL*-1;		
   // }		
   //else		
   //{		
    //  distanciaTOTAL= distanciaTOTAL;		
  // }
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
// mensaje
function mostrarMsj(mensaje, input){
	if(mensaje == ""){
		return;
	}
	var span_mensaje = $("<span>" + mensaje + "</span>");
	$('.radio').parent().append(span_mensaje);
}

//radio
function validarVehiculo(input){
	var mensaje = "";
	var bool = true;
	if($("input[name='vehicle']:radio").is(":checked")){
	   		return true
	   		console.log("OK")
	}else{
		mensaje += "Selecciona un Vehiculo" 
			bool = false
		};
	$(".radio").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
	};

function validarPasajeros(input){
	var mensaje = "";
	var bool = true;
	if($(".psj").val() == ""){
		mensaje += "Campo Obligatorio "
		bool = false
	}else{
		if($(".psj").val().length >10){
			mensaje += "Máximo 10 pasajeros"
			bool = false
		}
	}
	$("#text").siblings().filter("span").remove();// NO FUNCIONA
		mostrarMsj(mensaje, input);
		return bool
};

// precio
   function calcula_precio() {
   	var precio= "673​"
  if(document.getElementById("opciones").selectedIndex){
    seleccion = document.getElementById("opciones").value;
    }
  for(var i=0; i<document.formu.estado.length;i++){
      if(document.formu.estado[i].checked){
         seleccionado = document.formu.estado[i].value;
          }
          }
      var unidades = document.getElementById(".radio").value;
    if(unidades > 0){
      var unidades
    }

    if(document.getElementById("").checked){
     var precio = (parseInt(seleccion) + parseInt(seleccionado)) * parseInt(validarVehiculo);
     var precioMoto = (1 + parseInt(valor)/100) * precio;
     document.getElementById(".radio").value = precio.toFixed(2);}
    else{ var precio = (parseInt(seleccion) + parseInt(seleccionado)) * parseInt(unidades);
          document.getElementById(".radio").value = precio.toFixed(2); }
}

     








