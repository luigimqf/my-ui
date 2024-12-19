import Tabs from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Tabs/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Introduction: Story = {};
