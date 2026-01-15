export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve the index.html for all requests
    const html = await fetch(new URL('/index.html', request.url));
    
    return new Response(html.body, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
