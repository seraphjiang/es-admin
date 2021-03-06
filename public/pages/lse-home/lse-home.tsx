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
import { LseDetail } from '../lse-detail';


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

  }
  render() {

    const { httpClient } = this.props;
    httpClient.get('../api/es-admin/example').then((resp) => {
      console.log(resp.data.time);
    });

    const sideNav = [
      this.createItem('LSE Tool', {
        icon: <EuiIcon type="searchProfilerApp" />,
        items: [
          this.createItem('events', {}),
          this.createItem('edit', {}),
          this.createItem('detail', {}),
        ],
      }),
      this.createItem('Ops Console', {
        icon: <EuiIcon type="devToolsApp" />,
        items: [
          this.createItem('Oncall Tasks', {}),
          this.createItem('Domain Resource', {}),
          this.createItem('Customer Resource', {}),
          this.createItem('Oncall Handoff', {}),
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
            <Route path="/events">
              <LseList />
            </Route>
            <Route path="/edit">
              <LseEdit />
            </Route>
            <Route path="/detail" render={props => <LseDetail title="ES Detail" httpClient={httpClient} {...props} />} />
            <Route path="/">
              <LseList />
            </Route>
          </Switch>
        </EuiPage>
      </Router>
    );
  }
}
