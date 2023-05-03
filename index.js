import * as components from './components.json';

const pkgName = 'miles-styleguide';
const pkgPath = `/${pkgName}`;

export default {
  install(app) {
    Object.entries(components).forEach(([name, path]) => {
      if (path) {
        app.component(name, () => import(/* webpackChunkName: "[request]" */ `${pkgPath}/${path}`));
      }
    });
  },
};
