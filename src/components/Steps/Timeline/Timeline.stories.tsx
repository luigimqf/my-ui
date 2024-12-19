import StepTimeline from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StepTimeline> = {
  component: StepTimeline,
  title: "Components/Steps/Timeline",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof StepTimeline>;

export const Introduction: Story = {};
