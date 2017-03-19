

$(document).ready(function(){
	if ( $( "#table" ).length ) {	
		
		generateIcons();
		
		var map_ids = []; 
		

		var status_count = {}; 
		
		$.getJSON("data.json", function(json) {
			jQuery.each(json.data, function() {
					if(this.id){
						var localMapCount = 0;
						var row = "<tr>"+
							"<td><a href=\"https://www.youtube.com/watch?v="+this.id+"\">"+this.id+"</td>"+
							"<td>"+this.title+"</td>"+
							"<td><img src=\"https://img.youtube.com/vi/"+this.id+"/default.jpg\" /></td>"+
							"<td>"+this.category+"</td>"+
							"<td>"+this.comment+"</td>"+
							"<td>"+this.status+"</td>";
							if(this.lat){
								row = row + "<td>"+this.lat+"</td>";
							}else{
								row = row + "<td></td>";							
							}
							if(this.long){
								row = row + "<td>"+this.long+"</td>";
							}else{
								row = row + "<td></td>";							
							}
							if(this.lat && this.long){
								while($.inArray(this.id+"_"+localMapCount, map_ids) != -1){
									localMapCount++;
								}
								map_ids.push(this.id+"_"+localMapCount);
								row = row + "<td><div id=\"map_"+this.id+"_"+localMapCount+"\" class=\"review_map\"></div></td>";
							}else{
								row = row + "<td></td>";							
							}
							row = row + "<td>"+this.internal_comment+"</td>"+
							"</tr>";
						
						$( "#table" ).append(row);
						
						if(status_count[this.status]){
							status_count[this.status] = status_count[this.status] + 1;
						}else{
							status_count[this.status] = 1;
						}
						
						if(this.lat && this.long){
							// create a map in the "map" div, set the view to a given place and zoom
							map = L.map('map_'+this.id+"_"+localMapCount).setView([this.lat,this.long], 15);
							
							// add an OpenStreetMap tile layer
							L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
							attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
							}).addTo(map);
							
							var text = '<div class="bubble"><a href="https://www.youtube.com/watch?v='+this.id+'"><b>'+this.title+'</b></a><br /><br /><a href="https://www.youtube.com/watch?v='+this.id+'"><img src="https://img.youtube.com/vi/'+this.id+'/mqdefault.jpg" /></a>'+this.comment+'</div>';
							var marker = L.marker([this.lat, this.long],{icon:getIcon(this.category)}).bindPopup(text).openPopup().addTo(map);
						}
					}
				});
			
			var statistics = "<h3>Current Status</h3>";
			for (var status in status_count) {
				statistics = statistics + status + ": " + status_count[status]+"<br />";
			}
			$( "#statistics" ).append(statistics);
		});
		
		
	}
	
});
