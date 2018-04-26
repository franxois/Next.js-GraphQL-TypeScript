import { Component } from "react";

export interface SampleWidgetProps {
  name: string;
}

export class SampleWidget extends Component<SampleWidgetProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}
