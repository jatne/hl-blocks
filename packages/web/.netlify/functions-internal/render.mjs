import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-48f17a64.js","imports":["_app/immutable/start-48f17a64.js","_app/immutable/chunks/index-328d1cc5.js","_app/immutable/chunks/singletons-5a357f3a.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js')
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
				endpoint: () => import('../server/entries/endpoints/frontpage.json/_server.js')
			},
			{
				id: "settings.json",
				pattern: /^\/settings\.json$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/settings.json/_server.js')
			},
			{
				id: "blog/[slug].json",
				pattern: /^\/blog\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				page: null,
				endpoint: () => import('../server/entries/endpoints/blog/_slug_.json/_server.js')
			},
			{
				id: "[slug].json",
				pattern: /^\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				page: null,
				endpoint: () => import('../server/entries/endpoints/_slug_.json/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
