import TabsWithIcon from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TabsWithIcon> = {
  component: TabsWithIcon,
  title: "Components/Tabs/WithIcon",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TabsWithIcon>;

export const Introduction: Story = {};
