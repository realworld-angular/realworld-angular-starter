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
    template: `<button class="btn-icon">M</button>`,
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
    template: `<button class="btn-icon btn-primary">M</button>`,
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
    template: `<button class="btn-icon btn-secondary">M</button>`,
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

export const IconOnly: Story = {
  args: {
    label: 'Log In',
  },
  render: (args) => ({
    props: args,
    template: `
        <button class="btn-icon">
            <img ngSrc="/icons/add-icon.svg" alt="" height="24" width="24" />
        </button>
    `,
  }),
};

export const IconOnlyHovered: Story = {
  ...IconOnly,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const IconOnlyFocused: Story = {
  ...IconOnly,
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};
