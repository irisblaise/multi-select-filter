import type { Meta, StoryObj } from '@storybook/react-vite';
import SelectedOverview from './SelectedOverview';

const meta: Meta<typeof SelectedOverview> = {
  title: 'Components/SelectedOverview',
  component: SelectedOverview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectedOverview>;

export const NoneSelected: Story = {
  args: {
    categories: [],
  },
};

export const SomeSelected: Story = {
  args: {
    categories: ['Boeken', 'Elektronica', 'Kleding'],
  },
};

export const ManySelected: Story = {
  args: {
    categories: [
      'Boeken',
      'Elektronica',
      'Kleding',
      'Tuin',
      'Sport',
      'Huisdieren',
      'Reizen',
      'Muziek',
      'Films',
      'Games',
    ],
  },
};
