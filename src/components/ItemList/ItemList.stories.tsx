import type { Meta, StoryObj } from '@storybook/react-vite';
import ItemList from './ItemList';

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

export const Default: Story = {
  args: {
    items: ['Apple', 'Banana', 'Orange', 'Pear'],
    selected: ['Banana'],
  },
};

export const AllSelected: Story = {
  args: {
    items: ['Apple', 'Banana', 'Orange', 'Pear'],
    selected: ['Apple', 'Banana', 'Orange', 'Pear'],
  },
};

export const NoneSelected: Story = {
  args: {
    items: ['Apple', 'Banana', 'Orange', 'Pear'],
    selected: [],
  },
};
