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

export const Default: Story = {
  args: {
    label: 'Log In',
  },
  render: (args) => ({
    props: args,
    template: `<button class="btn">${args['label']}</button>`,
  }),
};

export const DefaultHovered: Story = {
  ...Default,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const DefaultFocused: Story = {
  ...Default,
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const Primary: Story = {
  args: {
    label: 'Log In',
  },
  render: (args) => ({
    props: args,
    template: `<button class="btn btn-primary">${args['label']}</button>`,
  }),
};

export const PrimaryHovered: Story = {
  ...Primary,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const PrimaryFocused: Story = {
  ...Primary,
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Log In',
  },
  render: (args) => ({
    props: args,
    template: `<button class="btn btn-secondary">${args['label']}</button>`,
  }),
};

export const SecondaryHovered: Story = {
  ...Secondary,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const SecondaryFocused: Story = {
  ...Secondary,
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};
