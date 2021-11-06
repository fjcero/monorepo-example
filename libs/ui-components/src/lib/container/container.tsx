import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContainerProps {
  children: React.ReactNode;
}

const StyledContainer = styled.div``;

export function Container(props: ContainerProps) {
  return <StyledContainer>{props?.children}</StyledContainer>;
}

export default Container;
