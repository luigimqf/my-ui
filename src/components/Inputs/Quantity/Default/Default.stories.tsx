import InputQuantity from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputQuantity> = {
  component: InputQuantity,
  title: "Components/Inputs/Quantity/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof InputQuantity>;

export const Introduction: Story = {};
