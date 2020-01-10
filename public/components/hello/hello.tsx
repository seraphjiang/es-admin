import React from 'react';

import {
  EuiText
} from '@elastic/eui';

export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <EuiText>
            I'm a Eui Text
        </EuiText>
        Hello, World!
      </div>
    );
  }
}
