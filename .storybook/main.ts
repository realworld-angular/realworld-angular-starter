import type {StorybookConfig} from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
