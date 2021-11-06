import styled from 'styled-components';
import { Avatar } from '@minded/ui-components';
import {
  CalendarIcon,
  NotificationIcon,
} from '@minded/insights-app/components/Icons';

const StyledTopNav = styled.div`
  background: var(--color-backgrounds-cream);
  border-bottom: 1px solid rgba(0, 0, 0, 5%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 48px;
`;

const StyledTopNavOptions = styled.div`
  display: flex;
  align-items: center;
`;

const mockedUser = {
  firstName: 'Francisco',
  lastName: 'Caballero',
  avatarUrl: null,
};

export const Navbar = () => {
  const onAvatarClickHandler = () => {
    console.log('click');
  };

  return (
    <StyledTopNav>
      <Avatar onClick={onAvatarClickHandler} user={mockedUser} />
      <StyledTopNavOptions>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          November&nbsp;
          <CalendarIcon />
        </div>
        <NotificationIcon />
      </StyledTopNavOptions>
    </StyledTopNav>
  );
};
