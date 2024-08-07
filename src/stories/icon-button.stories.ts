import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NgOptimizedImage } from '@angular/common';

const meta: Meta = {
  title: 'Example/Icon Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [NgOptimizedImage],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
        <button class="btn-icon">
            <img ngSrc="/icons/add-icon.svg" alt="" height="24" width="24" />
        </button>
    `,
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
  render: (args) => ({
    props: args,
    template: `
        <button class="btn-icon btn-primary">
            <img ngSrc="/icons/add-icon.svg" alt="" height="24" width="24" />
        </button>
    `,
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
  render: (args) => ({
    props: args,
    template: `
        <button class="btn-icon btn-secondary">
            <img ngSrc="/icons/add-icon.svg" alt="" height="24" width="24" />
        </button>
    `,
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
