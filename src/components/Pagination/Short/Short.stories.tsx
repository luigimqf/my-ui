import PaginationShort from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PaginationShort> = {
  component: PaginationShort,
  title: "Components/Pagination/Short",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PaginationShort>;

export const Introduction: Story = {};
