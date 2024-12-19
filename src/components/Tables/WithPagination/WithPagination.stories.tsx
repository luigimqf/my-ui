import TableWithPagination from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableWithPagination> = {
  component: TableWithPagination,
  title: "Components/Tables/WithPagination",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TableWithPagination>;

export const Introduction: Story = {};
