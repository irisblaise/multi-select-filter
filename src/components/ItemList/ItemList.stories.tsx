import type { Meta, StoryObj } from '@storybook/react-vite';
import ItemList from './ItemList';
import { fn, expect } from 'storybook/test';

const meta: Meta<typeof ItemList> = {
  title: 'Components/ItemList',
  component: ItemList,
  tags: ['autodocs'],
  argTypes: {
    onToggle: { action: 'toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof ItemList>;

const mockData = ['Boek', 'Computer', 'Telefoon', 'Kunst'];

export const Default: Story = {
  args: {
    items: mockData,
    selected: ['Boek'],
    onToggle: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const book = canvas.getByText('Boek');
    await userEvent.click(book);
    expect(args.onToggle).toHaveBeenCalled();
  },
};

export const AllSelected: Story = {
  args: {
    items: mockData,
    selected: ['Boek', 'Computer', 'Telefoon', 'Kunst'],
  },
};

export const NoneSelected: Story = {
  args: {
    items: mockData,
    selected: [],
  },
};
