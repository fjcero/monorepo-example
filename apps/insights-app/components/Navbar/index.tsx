import styled from 'styled-components';
import { Avatar } from '@minded/ui-components';

const StyledTopNav = styled.div`
  background: var(--color-backgrounds-cream);
  border-bottom: 1px solid rgba(0, 0, 0, 5%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 48px;
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
      <div>
        <div>notes</div>
        <div>notifications</div>
      </div>
    </StyledTopNav>
  );
};
