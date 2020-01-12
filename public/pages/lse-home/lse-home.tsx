import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LseEdit } from '../lse-edit';
import { LseList } from '../lse-list';
// import { LseDetail } from '../lse-detail';

export class LseHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get('../api/es-admin/example').then((resp) => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    const { title } = this.props;
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>          
          <li>
            <Link to="/edit">Edit</Link>
          </li>
        </ul>
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
    );
  }
}
