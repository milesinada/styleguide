import * as components from './components.json';

export default {
	install(app) {
		Object.entries(components).forEach(([name, path]) => {
			const path = pathObj.value
			console.log(path)
			app.component(name, require(`./${path}`).default)
		})
	}
}
