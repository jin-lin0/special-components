import React from "react";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    fontSize: {
      control: "select",
      options: [10, 14, 18],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  backgroundColor: "red",
  children: "你好",
};

export const DashedButton = Template.bind({});
DashedButton.args = {
  backgroundColor: "green",
  children: "你好sss",
  color: "yellow",
};
