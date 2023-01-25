export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-27737140.js","imports":["_app/immutable/start-27737140.js","_app/immutable/chunks/index-5db496a7.js","_app/immutable/chunks/singletons-79d695cf.js","_app/immutable/chunks/index-a92979df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
