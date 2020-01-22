export default function (server) {
  // const { rest } = server.config().get('elasticsearch');
  let { callWithRequest } = server.plugins.elasticsearch.getCluster('data');

  // http://localhost:5601/api/es-admin/example
  server.route({
    path: '/api/es-admin/example',
    method: 'GET',
    handler() {
      // GET _cat/indices?v&s=index:asc
      
      callWithRequest({}, 'index', {
        index: 'my-index',
        type: 'documents',
        id: 'document_12345',
        body: {
          fieldA: 'something',
          fieldB: 'awesome'
        }
      });

      return { time: (new Date()).toISOString() };
    }
  });

}
