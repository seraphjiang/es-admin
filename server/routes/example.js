export default function (server) {

  // http://localhost:5601/api/es-admin/example
  server.route({
    path: '/api/es-admin/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
