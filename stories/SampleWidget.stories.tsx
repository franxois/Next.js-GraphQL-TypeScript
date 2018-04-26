import * as React from "react";
import { SampleWidget } from "../components/SampleWidget";
import { storiesOf } from "@storybook/react";

storiesOf("TypeScript and Storybook", module).add("Sample Widget", () => (
  <SampleWidget name="François" />
));
