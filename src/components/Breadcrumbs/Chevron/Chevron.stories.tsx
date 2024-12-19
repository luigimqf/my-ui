import BreadcrumbsChevron from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadcrumbsChevron> = {
  component: BreadcrumbsChevron,
  title: "Components/Breadcrumbs/Chevron",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BreadcrumbsChevron>;

export const Introduction: Story = {};
