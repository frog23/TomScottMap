# Tom Scott Map
Live version available at http://www.frog23.net/TomScottMap/


A unofficial map of the videos created by [Tom Scott](https://www.tomscott.com/). 

See his [Youtube channel](https://www.youtube.com/user/enyay) for the complete list of videos (including those that are not geo-referenceable).

This map includes the videos from this channel, as well as the ones from the Matt and Tom channel. Also videos from other channels where he was involved can be included as well.

## Contribute
To contribute (i.e. add coodinates to videos), clone this repository, edit data.json and create a pull request.

### General Coodinate Guidlines
- A video should be mapped to the coodinates the video is about, and not necessarily where the video was filmed. E.g. the video about *[The Image That Can Break Your Brain](https://www.youtube.com/watch?v=Wm8ZoVQ_OJo)* was filmed at a particular theme park, but has nothing to do with this location. The general rule should be: Would I want to know about this video before I go to this particular place, because it will make me look at the place differently?
- A video can have more than one location attached to it. Just duplicate the line for the second or third marker. There should however not be too many markers per video, e.g. adding the video about *[The Man Who Invented, Then Hated, Shopping Malls](https://www.youtube.com/watch?v=4F7WCutpsJw)* to every shopping mall around is not reasonable. 
- Videos from other channels that are not from Toms Channel or Matt & Toms Channel can be added if they are related to Tom.

### data.json Fields
- *id*: the youtube id of the video
- *name*: the name of the video
- *lat*: the latitude component of the coodinates
- *long*: the longitude component of the coodinates
- *category*: the category is used to desplay the corresponding icon. Please use any of the following categories: "**Things**" for "Things you might not know", "**Places**" for "Amazing Places", "**BuildForScience**" for "Build for Science", "**Citation**" for "Citation Needed", "**ParkBench**" for the Park Bench Videos from the Matt an Tom Channel, "**Other**" for videos from Tom Scott created for other channels. Suggestions for additional categories are welcome.
- *comment*: A comment about the coodinates or the video that will be publicly displayed underneith the video thumbnail in the location bubble.
- *status*: A flag indicating the status of the video. Please use "**open**" if the coordinates have not been assesed yet, "**mapped**" if the coordinates have been added, "**no coodinates**" if the video can not be geo referenced. 
- *internal_comment"*: an internal comment that will not be published but that might help other people who are trying to find coodinates to the videos, e.g. "Those are the coordinates for the city only, somebody else might want to look up the correct building."


## Create your own map
In order to run this code on your own server, you have to download [Font Awesome](http://fontawesome.io/) and save its files unter /resources/font-awesome, as well as download [Leaflet Awesome Markers](https://github.com/lvoogdt/Leaflet.awesome-markers) and save its files under /resources.
