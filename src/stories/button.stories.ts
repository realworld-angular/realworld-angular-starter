import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: 'Log In',
  },
  render: (args) => ({
    props: args,
    template: `<div class="filled-btn">${args['label']}</div>`,
  }),
};
