addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	let url = request.url.substr(8)
	url = url.substr(url.indexOf('/') + 1)

	let response

	if (url === '') {
		response = new Response('Host/{owner}/{repos}/{branch}/{path}', {
			status: 200,
			headers: {
				'Content-Type': 'text/html',
			},
		})
	} else {
		// url = 'https://raw.githubusercontent.com/' + url;
		response = await fetch(url);
	}

	let myHeaders = new Headers(response.headers);
	myHeaders.set('Access-Control-Allow-Origin', '*');

	let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase(),
		ct = null;
	switch (ext) {
		case 'svg':
			ct = 'image/svg+xml';
			break;
		case 'js':
			ct = 'application/javascript';
			break;
		case 'css':
			ct = 'text/css';
			break;
		case 'pdf':
			ct = 'application/pdf';
			break;
	}

	if (ct) {
		myHeaders.set('Content-Type', ct);
	}

	return new Response(response.body, {
		status: response.status,
		headers: myHeaders,
	});
}
