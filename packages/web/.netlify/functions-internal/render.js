const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-9bca15e9.js","js":["start-9bca15e9.js","chunks/vendor-02363968.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'endpoint',
				pattern: /^\/index\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/index.json.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/settings\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/settings.json.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/([^/]+?)\.json$/,
				params: (m) => ({ slug: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/_slug_.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,2],
				b: [1]
			}
		]
	}
});
