import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "../components/Box/Box";

const meta = {
  title: "Example/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "12345678910",
  },
};
export const Skeleton: Story = {
  args: {
    skeleton: true,
    width: "100px",
    height: "100px",
  },
};
