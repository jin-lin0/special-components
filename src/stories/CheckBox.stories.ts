import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CheckBox from "../components/CheckBox/CheckBox";

const meta = {
  title: "Example/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "CheckBox",
  },
};
