import Alert from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components/Alerts/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Introduction: Story = {};
