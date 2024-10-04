import type { Meta, StoryObj } from "@storybook/react";
import VirtualList from "../components/VirtualList/VirtualList";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/VirtualList",
  component: VirtualList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    height: { control: { type: "number", min: 100, max: 1000, step: 100 } },
    overscan: { control: { type: "number", min: 0, max: 20, step: 1 } },
  },
} satisfies Meta<typeof VirtualList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: string[] = Array.from(
  { length: 1000 },
  (_, i) => `Item ${i + 1}`
);

const renderItem = (item: any, _: number) => (
  <div style={{ padding: "10px" }}>{item}</div>
);

const getItemDynamicHeight = (index: number) => (index % 2 === 0 ? 50 : 100);
const getItemHeight = () => 50;
export const Default: Story = {
  args: {
    data: sampleItems,
    renderItem: renderItem,
    getItemHeight,
    height: 400,
    width: 300,
  },
};

export const DynamicItemHeight: Story = {
  args: {
    data: sampleItems,
    renderItem: renderItem,
    getItemHeight: getItemDynamicHeight,
    height: 400,
    width: 300,
  },
};

export const NoOverscan: Story = {
  args: {
    data: sampleItems,
    renderItem: renderItem,
    getItemHeight,
    height: 400,
    width: 300,
    overscan: 0,
  },
};
