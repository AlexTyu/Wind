google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 12,
		disableDefaultUI: true,
		center: new google.maps.LatLng(37.8055962, -122.3900043),
		styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#238bb0"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"lightness":"-31"},{"gamma":"0.52"},{"visibility":"on"},{"saturation":"36"},{"hue":"#00b5ff"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#499abd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#081526"}]}]
};
	var mapElement = document.getElementById('googlemap');
	var map = new google.maps.Map(mapElement, mapOptions);
	
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(37.8155962, -122.2913043),
		map: map,
		title: 'Snazzy!'
	});
}