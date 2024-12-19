import BreadcrumbsWithBackground from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadcrumbsWithBackground> = {
  component: BreadcrumbsWithBackground,
  title: "Components/Breadcrumbs/WithBackground",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BreadcrumbsWithBackground>;

export const Introduction: Story = {};
