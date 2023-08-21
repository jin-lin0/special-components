import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    children: "button",
  },
  render: ({ backgroundColor, children, color }) => (
    <Button
      backgroundColor={backgroundColor}
      children={children}
      color={color}
    />
  ),
};
