import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-next',
    '@storybook/addon',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
