export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headset.jpeg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.9f3e7014.js","app":"_app/immutable/entry/app.84c472db.js","imports":["_app/immutable/entry/start.9f3e7014.js","_app/immutable/chunks/index.b4b62c68.js","_app/immutable/chunks/singletons.f85dc50f.js","_app/immutable/chunks/index.d64fbed3.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.84c472db.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/pocketbase.ec0be321.js","_app/immutable/chunks/index.d64fbed3.js","_app/immutable/chunks/index.b4b62c68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/posts/_server.ts.js')
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
