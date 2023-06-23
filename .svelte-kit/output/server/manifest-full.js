export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headset.jpeg","icons/close.svg","icons/profile.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.c4df7582.js","app":"_app/immutable/entry/app.1f90bf54.js","imports":["_app/immutable/entry/start.c4df7582.js","_app/immutable/chunks/index.1a6c1991.js","_app/immutable/chunks/singletons.aa555ca7.js","_app/immutable/chunks/index.2ecaa400.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.1f90bf54.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/pocketbase.34872167.js","_app/immutable/chunks/index.2ecaa400.js","_app/immutable/chunks/index.1a6c1991.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
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
				id: "/donations",
				pattern: /^\/donations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
