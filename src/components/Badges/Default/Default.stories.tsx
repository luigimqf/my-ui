import Badge from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Introduction: Story = {};
