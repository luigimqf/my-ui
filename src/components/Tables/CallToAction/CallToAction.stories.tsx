import TableCallToAction from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableCallToAction> = {
  component: TableCallToAction,
  title: "Components/Tables/CallToAction",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableCallToAction>;

export const Introduction: Story = {};
