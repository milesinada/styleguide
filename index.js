import components from './components.json';

export default {
	install(app) {
		Object.entries(components).forEach(([name, path]) => {
			app.component(name, () => import(`./${path}`))
		})
	}
}
