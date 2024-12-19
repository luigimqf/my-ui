import CheckboxWithIcon from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxWithIcon> = {
  component: CheckboxWithIcon,
  title: "Components/Inputs/Checkbox/WithIcon",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxWithIcon>;

export const Introduction: Story = {};
