import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import MultiSelect from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    onApply: { action: 'applied' },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {},
  play: async ({ canvas, userEvent }) => {
    window.localStorage.removeItem('appliedCategories');
    const input = canvas.getByRole('textbox', { name: /zoek producten/i });
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'fruit');
    expect(input).toHaveValue('fruit');
    const applyButton = canvas.getByRole('button', { name: /toepassen/i });
    expect(applyButton).toBeDisabled();
    const item = canvas.queryAllByRole('listitem')[0];
    if (item) {
      await userEvent.click(item);
      expect(applyButton).not.toBeDisabled();
      await userEvent.click(applyButton);
    }
  },
};
