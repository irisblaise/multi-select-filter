import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import SearchInput from './SearchInput';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    value: '',
    onChange: fn(),
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(val) => {
          args.onChange && args.onChange(val);
          setValue(val);
        }}
      />
    );
  },
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByRole('textbox');
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('placeholder', expect.stringMatching(/Zoek.../i));
    await userEvent.type(input, 'Boek');
    expect(args.onChange).toHaveBeenCalled();
    expect(input).toHaveValue('Boek');
  },
};

export const WithText: Story = {
  args: {
    value: 'Boek',
  },
};
