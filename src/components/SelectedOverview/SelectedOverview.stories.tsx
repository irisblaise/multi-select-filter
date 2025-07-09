import type { Meta, StoryObj } from '@storybook/react-vite';
import SelectedOverview from './SelectedOverview';
import { expect } from 'storybook/test';

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
  play: async ({ canvas }) => {
    const emptyText = canvas.getByText('Geen categorieën geselecteerd');
    expect(emptyText).toBeInTheDocument();
  },
};

export const SomeSelected: Story = {
  args: {
    categories: ['Boeken', 'Elektronica', 'Kleding'],
  },
  play: async ({ canvas }) => {
    for (const cat of ['Boeken', 'Elektronica', 'Kleding']) {
      const heading = canvas.getByRole('heading', { name: cat });
      expect(heading).toBeInTheDocument();
    }
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
  play: async ({ canvas }) => {
    for (const cat of [
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
    ]) {
      const heading = canvas.getByRole('heading', { name: cat });
      expect(heading).toBeInTheDocument();
    }
  },
};
