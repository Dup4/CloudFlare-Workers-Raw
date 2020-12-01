addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const _url = request.url.split('?');
    const host = _url[0];
    const params = _url[1] || '';
    const searchParams = new URLSearchParams(params);
    const url = searchParams.get('url');
    let response = null;

    if (url == null) {
        return new Response(`${host}?url={url}`, {
            status: 200,
            headers: {
                'Content-Type': 'text/html',
            },
        });
    } else {
        response = await fetch(url);
    }

    let myHeaders = new Headers(response.headers);
    myHeaders.set('Access-Control-Allow-Origin', '*');

    let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase(),
        ct = null;
    switch (ext) {
        case 'png':
            ct = 'image/png';
            break;
        case 'gif':
            ct = 'image/gif';
            break;
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
