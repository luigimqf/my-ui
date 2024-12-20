import BadgeDismiss from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeDismiss> = {
  component: BadgeDismiss,
  title: "Components/Badge/Dismiss",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BadgeDismiss>;

export const Introduction: Story = {};
