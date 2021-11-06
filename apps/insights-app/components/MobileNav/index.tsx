import { BottomNav, NavMenuItem } from '@minded/ui-components';
import styled from 'styled-components';

const StyledMobileNav = styled.div`
  color: white;
  background: var(--color-text-primary);
  border-top: 1px solid rgba(0, 0, 0, 5%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 48px;
`;

export const MobileNav = () => (
  <BottomNav>
    <StyledMobileNav>
      <NavMenuItem>Today</NavMenuItem>
      <NavMenuItem>Insights</NavMenuItem>
      <NavMenuItem>Secret chat</NavMenuItem>
    </StyledMobileNav>
  </BottomNav>
);
