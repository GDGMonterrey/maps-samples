var map;
var styles = [
	{ 
		'featureType' : 'water',
		'elementType'	: 'geometry',
		'stylers'	: [
			{
				'color' : '#1B2630'
			}
		]
	}, 
	{ 
		'featureType' : 'water',
		'elementType'	: 'labels',
		'stylers'	: [
			{
				'color' : '#678092'
			}
		]
	},
	{ 
		'featureType' : 'poi',
		'stylers'	: [
			{
				'visibility' : 'off'
			}
		]
	},
	{ 
		'featureType' : 'landscape',
		'elementType'	: 'geometry',
		'stylers'	: [
			{
				'color' : '#C9BC8A'
			}
		]
	},
	{ 
		'featureType' : 'road',
		'elementType'	: 'geometry',
		'stylers'	: [
			{
				'color' : '#D8CDAC'
			}
		]
	},
	{ 
		'featureType' : 'road',
		'elementType'	: 'labels',
		'stylers'	: [
			{
				'visibility' : 'off'
			}
		]
	},
	{ 
		'featureType' : 'transit',
		'stylers'	: [
			{
				'visibility': 'off'
			}
		]
	},
	{ 
		'featureType' : 'administrative.province',
		'elementType'	: 'labels',
		'stylers'	: [
			{
				'visibility': 'off'
			}
		]
	}
]; 
function initMap () {
	map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 25.657490, lng: -100.366773},
    zoom: 5,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	setStyle(styles);
	addControls();
}

function setStyle (style) {
	map.setOptions({ styles: style});
}

function addControls () {
  var starkControl = document.createElement('img');
  starkControl.src = 'stark.PNG';
  starkControl.className = 'shield';
  starkControl.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(starkControl);
  
}

