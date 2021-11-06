import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavMenuItemProps {
  children: React.ReactNode;
}

const StyledNavMenuItem = styled.div`
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  > svg {
    height: 20px;
    width: 20px;
    margin-bottom: 4px;
  }
`;

export function NavMenuItem({ children, ...props }: NavMenuItemProps) {
  return <StyledNavMenuItem>{children}</StyledNavMenuItem>;
}

export default NavMenuItem;
