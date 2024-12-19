import Table from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components/Tables/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Introduction: Story = {};
