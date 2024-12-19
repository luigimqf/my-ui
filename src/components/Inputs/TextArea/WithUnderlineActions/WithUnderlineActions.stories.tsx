import TextAreaWithUnderlineActions from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextAreaWithUnderlineActions> = {
  component: TextAreaWithUnderlineActions,
  title: "Components/Inputs/TextArea/WithUnderlineActions",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaWithUnderlineActions>;

export const Introduction: Story = {};
