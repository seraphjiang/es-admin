export default function (server) {

  server.route({
    path: '/api/es-admin/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
