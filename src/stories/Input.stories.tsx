import type { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "../components/Input/Input";
import { useArgs } from "@storybook/preview-api";
import { FaSearch } from "react-icons/fa";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

function Render(args: InputProps) {
  const [{ value }, updateArgs] = useArgs();

  function onChange(e: any) {
    updateArgs({ value: e.target.value });
  }

  return <Input onChange={onChange} value={value} {...args} />;
}

export const Primary: Story = {
  args: {},
  render: Render,
};

export const Value: Story = {
  args: {
    defaultValue: "123",
  },
  render: Render,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Render,
};

export const PrefixIcon: Story = {
  args: {
    prefixIcon: <FaSearch />,
  },
  render: Render,
};
