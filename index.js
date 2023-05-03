const components = require('./components.json')

module.exports = {
	install(Vue) {
		Object.entries(components).forEach(([name, path]) => {
		Vue.component(name, () => import(`./src/${path}`))
		})
	}
	}
