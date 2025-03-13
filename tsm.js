var map;
var defaultMarker, thingsMarker, placesMarker, citationMarker, scienceMarker, plusMarker, otherChannelMarker;

$(document).ready(function(){
	if ( $( "#map" ).length ) {	
		// create a map in the "map" div, set the view to a given place and zoom
		map = L.map('map').setView([35,15], 2);
		
		// add an OpenStreetMap tile layer
		L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
		
		generateIcons();
		
		$.getJSON("data.json", function(json) {
			jQuery.each(json.data, function() {
					if(this.lat && this.long){
						var text = '<div class="bubble"><a href="https://www.youtube.com/watch?v='+this.id+'"><b>'+this.title+'</b></a><br /><br /><a href="https://www.youtube.com/watch?v='+this.id+'"><img src="https://img.youtube.com/vi/'+this.id+'/mqdefault.jpg" /></a>'+this.comment+'</div>';
						var marker = L.marker([this.lat, this.long],{icon:getIcon(this.category)}).bindPopup(text).openPopup().addTo(map);
					}
				});
		});
	}
});

function generateIcons(){
	defaultMarker = L.AwesomeMarkers.icon({
	    icon: 'asterisk',
	    markerColor: 'darkred',
	    prefix: 'fa'
	  });
	
	
	thingsMarker = L.AwesomeMarkers.icon({
	    icon: 'lightbulb-o',
	    markerColor: 'darkred',
	    prefix: 'fa'
	  });
	
	placesMarker = L.AwesomeMarkers.icon({
	    icon: 'compass',
	    markerColor: 'darkred',
	    prefix: 'fa'
	  });

	
	citationMarker = L.AwesomeMarkers.icon({
	    icon: 'quote-right',
	    markerColor: 'darkred',
	    prefix: 'fa'
	  });

	
	scienceMarker = L.AwesomeMarkers.icon({
	    icon: 'flask',
	    markerColor: 'darkred',
	    prefix: 'fa'
	  });
	

	parkMarker = L.AwesomeMarkers.icon({
	    icon: 'asterisk',
	    markerColor: 'blue',
	    prefix: 'fa'
	  });
	
	plusMarker = L.AwesomeMarkers.icon({
	    icon: 'plus',
	    markerColor: 'darkblue',
	    prefix: 'fa'
	  });
	
	techdifMarker = L.AwesomeMarkers.icon({
	    icon: 'warning',
	    markerColor: 'green',
	    prefix: 'fa'
	  });

	jetlagMarker = L.AwesomeMarkers.icon({
	    icon: 'plane',
	    markerColor: 'darkblue',
	    prefix: 'fa'
	  });
	
	otherChannelMarker = L.AwesomeMarkers.icon({
	    icon: 'asterisk',
	    markerColor: 'orange',
	    prefix: 'fa'
	  });
}

function getIcon(category){
	if(category == "Things"){
		return thingsMarker;
	}else if(category == "Places"){
		return placesMarker;
	}else if(category == "Citation"){
		return citationMarker;
	}else if(category == "OtherChannel"){
		return otherChannelMarker;
	}else if(category == "ParkBench"){
		return parkMarker;
	}else if(category == "BuiltForScience"){
		return scienceMarker;
	}else if(category == "Plus"){
		return plusMarker;
	}else if(category == "TechDif"){
		return techdifMarker;
	}else if(category == "JetLag"){
		return jetlagMarker;
	}else{
		return defaultMarker;
	}
}
