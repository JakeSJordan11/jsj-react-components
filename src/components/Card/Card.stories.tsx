import React from "react";
import Card from "./Card";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "Card",
  component: Card,
  decorators: [withDesign],
};

export const Default = () => <Card />;

Default.story = {
  name: "Card stories",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QAuhToLfdkTFWCYmshOUcK/Components",
    },
  },
};
