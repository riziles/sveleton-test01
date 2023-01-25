import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-c8cba7f1.js","imports":["_app/immutable/start-c8cba7f1.js","_app/immutable/chunks/index-5db496a7.js","_app/immutable/chunks/singletons-79d695cf.js","_app/immutable/chunks/index-a92979df.js"],"stylesheets":[],"fonts":[]},
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
