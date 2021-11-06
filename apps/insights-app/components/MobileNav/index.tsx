import {
  BottomNav,
  BulbIcon,
  CalendarIcon,
  ChatIcon,
  NavMenuItem,
} from '@minded/ui-components';
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
      <NavMenuItem>
        <CalendarIcon />
        Today
      </NavMenuItem>
      <NavMenuItem>
        <BulbIcon />
        Insights
      </NavMenuItem>
      <NavMenuItem>
        <ChatIcon />
        Secret chat
      </NavMenuItem>
    </StyledMobileNav>
  </BottomNav>
);
