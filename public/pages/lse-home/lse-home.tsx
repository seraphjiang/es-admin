import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  EuiIcon,
  EuiSideNav
} from '@elastic/eui';


import { LseEdit } from '../lse-edit';
import { LseList } from '../lse-list';
// import { LseDetail } from '../lse-detail';

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
  };

  createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    return {
      ...data,
      id: name,
      name,
      isSelected: this.state.selectedItemName === name,
      onClick: () => this.selectItem(name),
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
      this.createItem('Kibana', {
        icon: <EuiIcon type="logoKibana" />,
        items: [
          this.createItem('Has normal children', {
            items: [
              this.createItem('Without forceOpen', {
                items: [this.createItem('Child 1'), this.createItem('Child 2')],
              }),
            ],
          }),
          this.createItem('Normally not open', {
            items: [
              this.createItem('Has forceOpen:true', {
                forceOpen: true,
                items: [this.createItem('Child 3'), this.createItem('Child 4')],
              }),
            ],
          }),
          this.createItem('With forceOpen:true', {
            forceOpen: true,
            items: [
              this.createItem('Normal child', {
                items: [this.createItem('Child 5'), this.createItem('Child 6')],
              }),
            ],
          }),
        ],
      }),
    ];

    return (
      <Router>
        <div>
          <EuiSideNav
            mobileTitle="Navigate within $APP_NAME"
            toggleOpenOnMobile={this.toggleOpenOnMobile}
            isOpenOnMobile={this.state.isSideNavOpenOnMobile}
            items={sideNav}
            style={{ width: 192 }}
          />
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
        </div>
      </Router>
    );
  }
}
