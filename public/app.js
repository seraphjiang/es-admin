import React from 'react';
import { uiModules } from 'ui/modules';
import chrome from 'ui/chrome';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'ui/autoload/styles';
import { LseHome } from './pages/lse-home';

const app = uiModules.get('apps/esAdmin');

app.config($locationProvider => {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
    rewriteLinks: false,
  });
});
app.config(stateManagementConfigProvider =>
  stateManagementConfigProvider.disable()
);

function RootController($scope, $element, $http) {
  const domNode = $element[0];

  // render react to DOM
  // render(<LseHome title="es-admin" httpClient={$http} />, domNode);
  // const history = createBrowserHistory({ basename: '/es_admin' });

  render(
    <Router >
      <Route render={props => <LseHome title="ES Admin" httpClient={$http} {...props} />} />
    </Router>,
    domNode
  );

  // unmount react on controller destroy
  $scope.$on('$destroy', () => {
    unmountComponentAtNode(domNode);
  });
}

chrome.setRootController('esAdmin', RootController);
