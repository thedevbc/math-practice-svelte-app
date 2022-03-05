export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","GitHub-Mark-32px.png","favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-807d5844.js","js":["start-807d5844.js","chunks/vendor-281a9532.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
