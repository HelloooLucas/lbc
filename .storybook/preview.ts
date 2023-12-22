import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withCssReset, withFonts } from "../src/utils/storybook";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [withCssReset, withFonts],
};

export default preview;
