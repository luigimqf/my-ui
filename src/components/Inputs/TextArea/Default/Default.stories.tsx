import TextArea from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/Inputs/TextArea/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Introduction: Story = {};
