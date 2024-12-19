import TextAreaWithAction from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextAreaWithAction> = {
  component: TextAreaWithAction,
  title: "Components/Inputs/TextArea/WithActions",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaWithAction>;

export const Introduction: Story = {};
