import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BottomNavProps {
  children: React.ReactNode;
}

const StyledBottomNav = styled.div`
  display: grid;
  align-self: end;
`;

export function BottomNav({ children }: BottomNavProps) {
  return <StyledBottomNav>{children}</StyledBottomNav>;
}

export default BottomNav;
