export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-48f17a64.js","imports":["_app/immutable/start-48f17a64.js","_app/immutable/chunks/index-328d1cc5.js","_app/immutable/chunks/singletons-5a357f3a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "frontpage.json",
				pattern: /^\/frontpage\.json$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/frontpage.json/_server.js')
			},
			{
				id: "settings.json",
				pattern: /^\/settings\.json$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./entries/endpoints/settings.json/_server.js')
			},
			{
				id: "blog/[slug].json",
				pattern: /^\/blog\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				page: null,
				endpoint: () => import('./entries/endpoints/blog/_slug_.json/_server.js')
			},
			{
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "[slug].json",
				pattern: /^\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				page: null,
				endpoint: () => import('./entries/endpoints/_slug_.json/_server.js')
			},
			{
				id: "[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
