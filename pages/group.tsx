import * as React from "react";

import { Component } from "react";

export interface GroupProps {
  sessionID: string;
  groupId: string;
}

export default class App extends Component<GroupProps, {}> {
  static async getInitialProps({ req, query: { id } }): Promise<GroupProps> {
    let props = { sessionID: null, groupId: id };

    if (req) {
      // We are server side
      props.sessionID = req.sessionID;
    }

    return props;
  }

  render() {
    // console.log("???? This props : ", this.props);
    return (
      <div>
        Page groupe for {this.props.groupId}
        <br />Current session id is {this.props.sessionID}
      </div>
    );
  }
}
