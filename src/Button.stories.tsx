import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import "./App.css";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "click me",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "click me",
    color: "secondary",
  },
};
