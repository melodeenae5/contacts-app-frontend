export const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8082'
		: 'http://names-and-stuff-server.herokuapp.com/';
