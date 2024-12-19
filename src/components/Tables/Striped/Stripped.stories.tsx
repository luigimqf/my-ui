import TableStriped from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableStriped> = {
  component: TableStriped,
  title: "Components/Tables/Striped",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableStriped>;

export const Introduction: Story = {};
