import TableDivided from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableDivided> = {
  component: TableDivided,
  title: "Components/Tables/Divided",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableDivided>;

export const Introduction: Story = {};
