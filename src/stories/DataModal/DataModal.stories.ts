import { Meta, StoryObj } from "@storybook/react";
import { DataModal } from "./DataModal";
import FacebookIcon from '../../assets/icon-facebook.svg';

const mockedData = [
  { day: 1, followers: 100 },
  { day: 2, followers: 120 },
  { day: 3, followers: 150 },
  { day: 4, followers: 180 },
  { day: 5, followers: 220 },
  { day: 6, followers: 300 },
  { day: 7, followers: 320 },
  { day: 8, followers: 330 },
  { day: 9, followers: 350 },
  { day: 10, followers: 365 },
];

const meta: Meta = {
  title: "Components/DataModal",
  component: DataModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    modalTitle: { control: "text" },
    socialIconUrl: { control: "text" },
    username: { control: "text" },
    totalCounter: { control: "number" },
    totalFollowersText: { control: "text" },
    tenDaysCounter: { control: "number" },
    tenDaysFollowersText: { control: "text" },
    todayCounter: { control: "number" },
    todayFollowersText: { control: "text" },
    dates: { control: "text" },
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    data: {
      control: { type: 'object' },
      description: 'Array of objects representing the growth of followers over 10 days.',
    },
  },
  args: {
    modalTitle: "Facebook",
    socialIconUrl: FacebookIcon,
    username: "@nathanf",
    totalCounter: 1987,
    totalFollowersText: "Total followers",
    tenDaysCounter: 81,
    tenDaysFollowersText: "New followers in the past 10 days",
    todayCounter: 12,
    todayFollowersText: "New followers TODAY",
    dates: "May 4 - May 13",
    isOpen: true,
    onClose: () => alert("Modal closed"),
    data: mockedData,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DataModalExample: Story = {};
