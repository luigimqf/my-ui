import Pagination from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Pagination/Default",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Introduction: Story = {};
