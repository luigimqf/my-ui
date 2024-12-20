import BadgeWithIcon from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeWithIcon> = {
  component: BadgeWithIcon,
  title: "Components/Badge/WithIcon",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BadgeWithIcon>;

export const Introduction: Story = {};
