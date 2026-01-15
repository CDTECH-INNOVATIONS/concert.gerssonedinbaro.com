export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to serve the requested asset
    try {
      const asset = await env.ASSETS.fetch(request);
      return asset;
    } catch (e) {
      // If not found, serve index.html
      return await env.ASSETS.fetch(new URL('/index.html', request.url));
    }
  },
};
