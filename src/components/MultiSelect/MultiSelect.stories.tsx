import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
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
    try {
      window.localStorage.removeItem('appliedCategories');
      const input = canvas.getByRole('textbox', { name: /zoek producten/i });
      expect(input).toBeInTheDocument();
      await userEvent.type(input, 'boek');
      expect(input).toHaveValue('boek');
      const applyButton = canvas.getByRole('button', { name: /toepassen/i });
      expect(applyButton).toBeDisabled();
      const items = await canvas.findAllByRole('listitem');
      if (items.length === 0) {
        throw new Error('No list items found after typing "boek".');
      }
      const checkbox = items[0].querySelector('input[type="checkbox"]');
      if (!checkbox) {
        throw new Error('No checkbox found in the first list item.');
      }
      await userEvent.click(checkbox);
      await waitFor(() => expect(applyButton).not.toBeDisabled());
      await userEvent.click(applyButton);
    } catch (error) {
      console.error('Unhandled error in play function:', error);
      throw error;
    }
  },
};
