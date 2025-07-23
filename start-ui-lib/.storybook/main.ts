import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  '@storybook/addon-a11y',
    '@storybook/addon-actions', // ✅ explicitly include this
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;

