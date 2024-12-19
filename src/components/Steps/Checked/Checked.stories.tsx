import StepChecked from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StepChecked> = {
  component: StepChecked,
  title: "Components/Steps/Checked",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StepChecked>;

export const Introduction: Story = {};
