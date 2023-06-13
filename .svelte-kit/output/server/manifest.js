export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","headset.jpeg","icons/close.svg","icons/profile.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.b39f8a7c.js","app":"_app/immutable/entry/app.e2248297.js","imports":["_app/immutable/entry/start.b39f8a7c.js","_app/immutable/chunks/index.8aab6e09.js","_app/immutable/chunks/singletons.80c1c7e9.js","_app/immutable/chunks/index.9501c385.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e2248297.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/pocketbase.c4b24bef.js","_app/immutable/chunks/index.9501c385.js","_app/immutable/chunks/index.8aab6e09.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
		],
		routes: [
			{
				id: "/donations",
				pattern: /^\/donations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
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
