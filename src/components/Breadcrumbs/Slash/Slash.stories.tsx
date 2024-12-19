import BreadcrumbSlash from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BreadcrumbSlash> = {
  component: BreadcrumbSlash,
  title: "Components/Breadcrumbs/Slash",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof BreadcrumbSlash>;

export const Introduction: Story = {};
