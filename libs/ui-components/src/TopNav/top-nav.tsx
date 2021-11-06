import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TopNavProps {}

const StyledTopNav = styled.div`
  color: pink;
`;

export function TopNav(props: TopNavProps) {
  return (
    <StyledTopNav>
      <div>avatar</div>
      <div>notes</div>
      <div>notifications</div>
    </StyledTopNav>
  );
}
