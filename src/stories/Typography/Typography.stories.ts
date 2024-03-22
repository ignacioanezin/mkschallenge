import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [ 'extraSmall', 'small', 'medium' , 'large' , 'extraLarge' , 'huge' , 'giant'],
      },
    },
    weight: { control: { type: "select", options: ["regular", "bold"] } },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "red", "green"],
      },
    },
    children: { control: "text" },
    letterSpacing: { control: "boolean" },
    tag: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      },
    },
    style: { control: "object" },
    positive: { control: "boolean" },
  },
  args: {
    size: "Medium",
    weight: "regular",
    variant: "primary",
    children: "Typography Component",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyExample: Story = {};
