import StepProgressIcon from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StepProgressIcon> = {
  component: StepProgressIcon,
  title: "Components/Steps/ProgressIcon",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StepProgressIcon>;

export const Introduction: Story = {};
