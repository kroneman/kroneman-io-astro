import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('Renders children passed to it', () => {
    const result = render(<Header>Child</Header>);

    expect(result.container).toHaveTextContent('Child');
  });
});
