import BadgeStatus from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeStatus> = {
  component: BadgeStatus,
  title: "Components/Badge/Status",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BadgeStatus>;

export const Introduction: Story = {};
