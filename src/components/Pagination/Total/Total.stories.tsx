import PaginationTotal from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PaginationTotal> = {
  component: PaginationTotal,
  title: "Components/Pagination/Total",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PaginationTotal>;

export const Introduction: Story = {};
