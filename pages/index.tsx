import * as React from "react";

import { Component } from "react";

export interface HelloProps {
  sessionID: string;
}

export default class App extends Component<HelloProps, {}> {
  static async getInitialProps({ req }) {
    let props = { sessionID: null };

    if (req) {
      console.log(req);
      props.sessionID = req.sessionID;
    }

    return props;
  }

  render() {
    console.log("???? This props : ", this.props);
    return (
      <div>
        Hello from Next.js ?{this.props.sessionID}? {new Date().getTime()}{" "}
      </div>
    );
  }
}
