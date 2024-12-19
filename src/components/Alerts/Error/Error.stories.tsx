import AlertError from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AlertError> = {
  component: AlertError,
  title: "Components/Alerts/Error",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof AlertError>;

export const Introduction: Story = {};
