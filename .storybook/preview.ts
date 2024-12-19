import type { Preview } from "@storybook/react";
import tailwindConfig from "../tailwind.config";
import 'src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
