import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";
import { useArgs } from "@storybook/preview-api";

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

export const Primary: Story = {
  args: {},
};

export const Value: Story = {
  args: {
    defaultValue: "123",
    value: "123",
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    function onChange(e: any) {
      updateArgs({ value: e.target.value });
    }

    return <Input onChange={onChange} value={value} {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
