import { resolve } from 'path';
import { existsSync } from 'fs';

import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'es_admin',
    uiExports: {
      app: {
        title: 'Es Admin',
        description: 'es admin',
        main: 'plugins/es_admin/app',
      },
      hacks: [
        'plugins/es_admin/hack'
      ],
      styleSheetPaths: [resolve(__dirname, 'public/app.scss'), resolve(__dirname, 'public/app.css')].find(p => existsSync(p)),
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
  });
}
