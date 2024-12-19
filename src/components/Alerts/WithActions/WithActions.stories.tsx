import AlertWithAction from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertWithAction> = {
  component: AlertWithAction,
  title: "Components/Alerts/WithActions",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AlertWithAction>;

export const Introduction: Story = {};
