import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-fa0f636e.js","imports":["_app/immutable/start-fa0f636e.js","_app/immutable/chunks/index-5db496a7.js","_app/immutable/chunks/singletons-3cc5b54b.js","_app/immutable/chunks/index-a92979df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
