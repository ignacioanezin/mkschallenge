import { Meta, StoryObj } from "@storybook/react";
import { SocialCard } from "./SocialCard";
import lightTheme from "../../theme/lightTheme";
import FacebookIcon from "../../assets/icon-facebook.svg";

const meta: Meta = {
  title: "Components/SocialCard",
  component: SocialCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    socialIconUrl: { control: "text" },
    username: { control: "text" },
    counter: { control: "number" },
    followersText: { control: "text" },
    todayCounter: { control: "number" },
    onClick: { action: "clicked" },
    borderTopColor: { control: "color" },
  },
  args: {
    socialIconUrl: FacebookIcon,
    username: "@nathanf",
    counter: 1987,
    followersText: "FOLLOWERS",
    todayCounter: 12,
    onClick: () => alert("Button clicked"),
    borderTopColor: lightTheme.colors.primary.facebook,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SocailCardExample: Story = {};
