  //  Esta funcion permite insertar los conteos  de los anuncios publicados
function setCountAnuncio(idPublicidad, idDominio)
{	
	$.ajax({  
	    type: "GET",  
	    url:"contadorPublicidad.action?idAnuncio="+idPublicidad+"&idDominio="+idDominio, 
	    success: function(response){  
	    },  
	    error: function(e){  
	        
	    },
	    async: true, 
	    cache: false  
	});  
}  