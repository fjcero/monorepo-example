import { render } from '@testing-library/react';

import BottomNav from './bottom-nav';

describe('BottomNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomNav />);
    expect(baseElement).toBeTruthy();
  });
});
