import TableSelectable from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableSelectable> = {
  component: TableSelectable,
  title: "Components/Tables/Selectable",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableSelectable>;

export const Introduction: Story = {};
