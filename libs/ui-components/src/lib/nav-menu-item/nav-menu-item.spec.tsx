import { render } from '@testing-library/react';

import NavMenuItem from './nav-menu-item';

describe('NavMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
