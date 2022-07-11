# Tom Scott Map

An unofficial map of the videos created by [Tom Scott](https://www.tomscott.com/). See his [Youtube channel](https://www.youtube.com/user/enyay) for the complete list of videos (including those that are not geo-referenceable).

This map includes the videos from this channel, as well as the ones from the Matt and Tom channel. Also, videos from other channels where he was involved can be included as well.

*Live version available at https://www.frog23.net/TomScottMap/*

## Contribute
To contribute (i.e. add coordinates to videos), clone this repository, edit data.json and create a pull request. You can take a look at the [Review Interface](http://www.frog23.net/TomScottMap/review.html) to see which videos aren't geo-referenced yet.

### General Coordinate Guidelines
- A video should be mapped to the coordinates the video is about, and not necessarily where the video was filmed. E.g. the video about *[The Image That Can Break Your Brain](https://www.youtube.com/watch?v=Wm8ZoVQ_OJo)* was filmed at a particular theme park, but has nothing to do with this location. The general rule should be: Would I want to know about this video before I go to this particular place because it will make me look at the place differently?
- A video can have more than one location attached to it. Just duplicate the line for the second or third marker. There should however not be too many markers per video, e.g. adding the video about *[The Man Who Invented, Then Hated, Shopping Malls](https://www.youtube.com/watch?v=4F7WCutpsJw)* to every shopping mall around is not reasonable. 
- Videos from other channels that are not from Toms Channel or Matt & Toms Channel can be added if they are related to Tom.
- When two videos are from the same location, (usually one video from the main channel and one behind-the-scenes look as a Park Bench video, e.g. for the Arecibo Telescope), the markers should have slightly different coordinates, so they appear as two different markers on the map, when the user zooms in enough. 

### data.json Fields
- *id*: the youtube id of the video
- *name*: the name of the video
- *lat*: the latitude component of the coordinates
- *long*: the longitude component of the coordinates
- *category*: the category is used to display the corresponding icon. Please use any of the following categories: "**Things**" for "Things you might not know", "**Places**" for "Amazing Places", "**BuildForScience**" for "Build for Science", "**Linguistics**" for videos around linguistics, "**TheBasics**" for the series "The Basics", "**Citation**" for "Citation Needed", "**Games**" for all other kinds of game shows except Citation Needed, "**ParkBench**" for the Park Bench Videos from the Matt and Tom channel, "**Other**" for any other videos on Toms channel, "**Plus**" for the videos from the "Tom Scott plus" channel, "**TechDif**" for the videos from "The Technical Difficulties" channel and "**OtherChannel**" for videos from Tom Scott created for other channels. Suggestions for additional categories are welcome.
- *comment*: A comment about the coordinates or the video that will be publicly displayed underneath the video thumbnail in the location bubble.
- *status*: A flag indicating the status of the video. Please use "**open**" if the coordinates have not been assessed yet, "**mappable**" if the video can be mapped, but the coordinates have not been added yet, "**mapped**" if the coordinates have been added, "**no coordinates**" if the video can not be geo-referenced. 
- *internal_comment"*: an internal comment that will not be published but that might help other people who are trying to find coordinates to the videos, e.g. "Those are the coordinates for the city only, somebody else might want to look up the correct building."


## Create your map
To run this code on your server, you have to download [Font Awesome](http://fontawesome.io/) and save its files under /resources/font-awesome, as well as download [Leaflet Awesome Markers](https://github.com/lvoogdt/Leaflet.awesome-markers) and save its files under /resources.
