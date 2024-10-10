import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { VerticalNavComponent } from '../app/shared/components/vertical-nav/vertical-nav.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Example/Navigation',
  component: VerticalNavComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    links: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<VerticalNavComponent>;

export const Default: Story = {
  args: {
    links: [
      { label: 'Home', url: '/home', icon: 'add' },
      { label: 'About', url: '/about', icon: 'add' },
      { label: 'Contact', url: '/contact', icon: 'add' },
    ],
  },
};
