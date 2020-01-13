import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  EuiIcon,
  EuiSideNav,
  EuiPage,
  EuiPageSideBar
} from '@elastic/eui';


import { LseEdit } from '../lse-edit';
import { LseList } from '../lse-list';
// import { LseDetail } from '../lse-detail';


export interface RedirectWrapperProps {
  to: string;
}

export const RedirectWrapper = ({ to }: RedirectWrapperProps) => {
  return <Redirect to={to} />;
};

export class LseHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideNavOpenOnMobile: false,
      selectedItemName: null,
    };
  }

  toggleOpenOnMobile = () => {
    this.setState({
      isSideNavOpenOnMobile: !this.state.isSideNavOpenOnMobile,
    });
  };
  selectItem = name => {
    this.setState({
      selectedItemName: name,
    });
    debugger
    <Redirect to={"/edit"} />;
  };

  createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: this.state.selectedItemName === name,
      href: '#/' + name
    };
  };

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    // const { httpClient } = this.props;
    // httpClient.get('../api/es-admin/example').then((resp) => {
    //   this.setState({ time: resp.data.time });
    // });
  }
  render() {
    const sideNav = [
      this.createItem('LSE Tool', {
        icon: <EuiIcon type="logoKibana" />,
        items: [
          this.createItem('edit', {}),
          this.createItem('list', {}),
        ],
      }),
    ];

    return (
      <Router basename={'/es_admin'} >
        <EuiPage>
          <EuiPageSideBar>
            <EuiSideNav
              mobileTitle="Navigate within $APP_NAME"
              toggleOpenOnMobile={this.toggleOpenOnMobile}
              isOpenOnMobile={this.state.isSideNavOpenOnMobile}
              items={sideNav}
              style={{ width: 192 }}
            />
          </EuiPageSideBar>
          <Switch>
            <Route path="/edit">
              <LseEdit />
            </Route>
            <Route path="/list">
              <LseList />
            </Route>
            <Route path="/">
              <LseList />
            </Route>
          </Switch>
        </EuiPage>
      </Router>
    );
  }
}
