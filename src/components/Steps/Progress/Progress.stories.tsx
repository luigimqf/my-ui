import StepProgress from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StepProgress> = {
  component: StepProgress,
  title: "Components/Steps/Progress",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StepProgress>;

export const Introduction: Story = {};
