import InputQuantityBordered from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputQuantityBordered> = {
  component: InputQuantityBordered,
  title: "Components/Inputs/Quantity/Bordered",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof InputQuantityBordered>;

export const Introduction: Story = {};
