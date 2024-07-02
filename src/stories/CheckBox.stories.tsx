import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import CheckBox, { CheckBoxProps } from "../components/CheckBox/CheckBox";

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

function Render(args: CheckBoxProps) {
  const [{ checked }, updateArgs] = useArgs();
  function onChange() {
    updateArgs({ checked: !checked });
  }

  return <CheckBox onChange={onChange} checked={checked} {...args} />;
}

export const Primary: Story = {
  args: {
    label: "CheckBox",
  },
  render: Render,
};

export const DefaultChecked: Story = {
  args: {
    label: "CheckBox",
    defaultChecked: true,
  },
  render: Render,
};
