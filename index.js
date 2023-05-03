import * as components from './components.json';

export default {
	install(app) {
		Object.entries(components).forEach(([name, path]) => {
			if (path) {
			app.component(name, () => import(`./${path}`));
			}
		});
		},
	};
	