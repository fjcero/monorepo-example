import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BottomNavProps {}

const StyledBottomNav = styled.div`
  color: pink;
`;

export function BottomNav(props: BottomNavProps) {
  return (
    <StyledBottomNav>
      <h1>Welcome to BottomNav!</h1>
    </StyledBottomNav>
  );
}

export default BottomNav;
