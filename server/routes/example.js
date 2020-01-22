export default function (server) {
  // const { rest } = server.config().get('elasticsearch');
  let { callWithRequest } = server.plugins.elasticsearch.getCluster('data');

  // http://localhost:5601/api/es-admin/example
  server.route({
    path: '/api/es-admin/example',
    method: 'GET',
    handler() {
      // GET _cat/indices?v&s=index:asc
      // GET my-index/_search
      callWithRequest({}, 'index', {
        index: 'my-index',
        type: 'documents',
        id: 'document_12345',
        body: {
          fieldA: 'something',
          fieldB: 'awesome',
          date: Date.now()
        }
      });


      callWithRequest({}, 'index', {
        index: 'my-index',
        type: 'documents',
        id: 'document_2',
        body: {
          fieldA: 'something',
          fieldB: 'awesome',
          date: Date.now()
        }
      });
      
      callWithRequest({}, 'index', {
        index: 'my-index',
        type: 'documents',
        id: 'document_3',
        body: {
          fieldA: 'something',
          fieldB: 'awesome',
          date: Date.now()
        }
      }).then(res => {
        console.log('insert doc 3')
        callWithRequest({}, 'delete', {
          index: 'my-index',
          type: 'documents',
          id: 'document_3'
        }).then(re => {
          console.log('delete doc 3')
        })
      })

      return { time: (new Date()).toISOString() };
    }
  });

}
