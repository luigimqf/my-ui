import InputSelect from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputSelect> = {
  component: InputSelect,
  title: "Components/Inputs/Select/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof InputSelect>;

export const Introduction: Story = {};
