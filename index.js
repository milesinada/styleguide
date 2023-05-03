import * as components from './components.json';

export default {
	install(app) {
		Object.keys(components).forEach(name => {
		const component = components[name];
		app.component(name, () => import(`./${component.path}`));
		});
	}
};
