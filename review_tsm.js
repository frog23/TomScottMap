

$(document).ready(function(){
	if ( $( "#table" ).length ) {	
		
		generateIcons();
		
		var map_ids = []; 
		

		var status_count = {}; 
		var category_count = {}; 
		
		$( "#show_all" ).hide();
			
		// create a map in the "map" div, set the view to a given place and zoom
		var map = L.map('review_map');
		
		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
					
		var first = true;
		
		$.getJSON("data.json", function(json) {
			jQuery.each(json.data, function() {
					if(this.id){
						var localVideoCount = 0;
						
						while($.inArray(this.id+"_"+localVideoCount, map_ids) != -1){
							localVideoCount++;
						}
						map_ids.push(this.id+"_"+localVideoCount);
						
						var row = "<tr id=\"row_"+this.id+"_"+localVideoCount+"\" class=\""+this.category.toLowerCase().replace(" ","_")+" "+this.status.toLowerCase().replace(" ","_")+"\">"+
							"<td class=\"text_content\"><a href=\"https://www.youtube.com/watch?v="+this.id+"\">"+this.id+"</td>"+
							"<td class=\"text_content\">"+this.title+"</td>"+
							"<td><img src=\"https://img.youtube.com/vi/"+this.id+"/default.jpg\" /></td>"+
							"<td class=\"text_content\">"+this.category+"</td>"+
							"<td class=\"text_content\">"+this.comment+"</td>"+
							"<td class=\"text_content\">"+this.status+"</td>";
							if(this.lat){
								row = row + "<td class=\"text_content\">"+this.lat+"</td>";
							}else{
								row = row + "<td></td>";							
							}
							if(this.long){
								row = row + "<td class=\"text_content\">"+this.long+"</td>";
							}else{
								row = row + "<td></td>";							
							}
							row = row + "<td class=\"text_content\">"+this.internal_comment+"</td>"+
							"</tr>";
						
						$( "#table" ).append(row);
						
						if(status_count[this.status]){
							status_count[this.status] = status_count[this.status] + 1;
						}else{
							status_count[this.status] = 1;
						}
						
						if(category_count[this.category]){
							category_count[this.category] = category_count[this.category] + 1;
						}else{
							category_count[this.category] = 1;
						}
						
						if(this.lat && this.long){
							var text = '<div class="bubble"><a href="https://www.youtube.com/watch?v='+this.id+'"><b>'+this.title+'</b></a><br /><br /><a href="https://www.youtube.com/watch?v='+this.id+'"><img src="https://img.youtube.com/vi/'+this.id+'/mqdefault.jpg" /></a>'+this.comment+'</div>';
							var marker = L.marker([this.lat, this.long],{icon:getIcon(this.category)}).bindPopup(text).openPopup().addTo(map);
							if(first){
								map.setView([this.lat,this.long], 15);
								$( "#row_"+this.id+"_"+localVideoCount ).addClass( "current" );
								first = false;
							}
							$( "#row_"+this.id+"_"+localVideoCount ).mouseenter({lat: this.lat, long: this.long, id: "row_"+this.id+"_"+localVideoCount}, function(event) {
								if(!$( "#"+event.data.id ).hasClass( "current" )){
									map.setView([event.data.lat,event.data.long], 15);
									$( ".current" ).removeClass( "current" );
									$( "#"+event.data.id ).addClass( "current" );
								}
							});
						}
					}
				});
			
			var statistics = "<div class=\"statistics-block\" style=\"width:300px;float:left\"><h3>Current Status</h3>";
			for (var status in status_count) {
				statistics = statistics + status + ": " + status_count[status]+"<br />";
			}
			statistics = statistics + "</div>";
			
			statistics = statistics + "<div class=\"statistics-block\" style=\"width:300px;float:left;margin-bottom:20px;\"><h3>Categories</h3>";
			for (var category in category_count) {
				if(category.length == 0){
					statistics = statistics + "(none)";
				}else{
					statistics = statistics + category;
				}
				statistics = statistics + ": " + category_count[category]+"<br />";
			}
			statistics = statistics + "</div>";
			$( "#statistics" ).append(statistics);
			
			$( "#show_unmapped" ).click(function() {
				$( ".mapped" ).addClass( "hidden" );
				$( ".no_coordinates" ).addClass( "hidden" );
				$( "#show_unmapped" ).hide();
				$( "#show_all" ).show();
				$( "#review_map" ).hide();
			});
			
			$( "#show_all" ).click(function() {
				$( ".hidden" ).removeClass( "hidden" );
				$( "#show_unmapped" ).show();
				$( "#show_all" ).hide();
				$( "#review_map" ).show();
			});
			
			
		});
		
		
	}
	
});
