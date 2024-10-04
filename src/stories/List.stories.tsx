import type { Meta, StoryObj } from "@storybook/react";
import List from "../components/List/List";

const meta = {
  title: "Example/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderItem = (item: any, _: number) => (
  <div style={{ padding: "10px" }}>{`${item.id}___${item.name}`}</div>
);

export const Primary: Story = {
  args: {
    data: [
      {
        id: 10000,
        name: "a0",
      },
      {
        id: 10001,
        name: "a1",
      },
      {
        id: 10002,
        name: "a2",
      },
      {
        id: 10003,
        name: "a3",
      },
      {
        id: 10004,
        name: "a4",
      },
      {
        id: 10005,
        name: "a5",
      },
      {
        id: 10006,
        name: "a6",
      },
      {
        id: 10007,
        name: "a7",
      },
      {
        id: 10008,
        name: "a8",
      },
      {
        id: 10009,
        name: "a9",
      },
      {
        id: 10010,
        name: "a10",
      },
      {
        id: 10011,
        name: "a11",
      },
      {
        id: 10012,
        name: "a12",
      },
      {
        id: 10013,
        name: "a13",
      },
      {
        id: 10014,
        name: "a14",
      },
      {
        id: 10015,
        name: "a15",
      },
      {
        id: 10016,
        name: "a16",
      },
      {
        id: 10017,
        name: "a17",
      },
      {
        id: 10018,
        name: "a18",
      },
      {
        id: 10019,
        name: "a19",
      },
      {
        id: 10020,
        name: "a20",
      },
      {
        id: 10021,
        name: "a21",
      },
      {
        id: 10022,
        name: "a22",
      },
      {
        id: 10023,
        name: "a23",
      },
      {
        id: 10024,
        name: "a24",
      },
      {
        id: 10025,
        name: "a25",
      },
      {
        id: 10026,
        name: "a26",
      },
      {
        id: 10027,
        name: "a27",
      },
      {
        id: 10028,
        name: "a28",
      },
      {
        id: 10029,
        name: "a29",
      },
      {
        id: 10030,
        name: "a30",
      },
      {
        id: 10031,
        name: "a31",
      },
      {
        id: 10032,
        name: "a32",
      },
      {
        id: 10033,
        name: "a33",
      },
      {
        id: 10034,
        name: "a34",
      },
      {
        id: 10035,
        name: "a35",
      },
      {
        id: 10036,
        name: "a36",
      },
      {
        id: 10037,
        name: "a37",
      },
      {
        id: 10038,
        name: "a38",
      },
      {
        id: 10039,
        name: "a39",
      },
      {
        id: 10040,
        name: "a40",
      },
      {
        id: 10041,
        name: "a41",
      },
      {
        id: 10042,
        name: "a42",
      },
      {
        id: 10043,
        name: "a43",
      },
      {
        id: 10044,
        name: "a44",
      },
      {
        id: 10045,
        name: "a45",
      },
      {
        id: 10046,
        name: "a46",
      },
      {
        id: 10047,
        name: "a47",
      },
      {
        id: 10048,
        name: "a48",
      },
      {
        id: 10049,
        name: "a49",
      },
      {
        id: 10050,
        name: "a50",
      },
      {
        id: 10051,
        name: "a51",
      },
      {
        id: 10052,
        name: "a52",
      },
      {
        id: 10053,
        name: "a53",
      },
      {
        id: 10054,
        name: "a54",
      },
      {
        id: 10055,
        name: "a55",
      },
      {
        id: 10056,
        name: "a56",
      },
      {
        id: 10057,
        name: "a57",
      },
      {
        id: 10058,
        name: "a58",
      },
      {
        id: 10059,
        name: "a59",
      },
      {
        id: 10060,
        name: "a60",
      },
      {
        id: 10061,
        name: "a61",
      },
      {
        id: 10062,
        name: "a62",
      },
    ],
    renderItem,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", overflow: "auto" }}>
        <Story />
      </div>
    ),
  ],
};
