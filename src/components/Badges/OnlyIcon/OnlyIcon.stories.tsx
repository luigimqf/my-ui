import BadgeOnlyIcon from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeOnlyIcon> = {
  component: BadgeOnlyIcon,
  title: "Components/Badge/OnlyIcon",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BadgeOnlyIcon>;

export const Introduction: Story = {};
