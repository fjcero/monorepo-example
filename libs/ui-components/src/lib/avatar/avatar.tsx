import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AvatarProps {
  user: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
  onClick: () => void;
}

const StyledAvatar = styled.div`
  color: var(--color-text-white);
  background: var(--color-text-primary);
  border: 1.5px solid rgba(0, 0, 0, 10%);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export function Avatar(props: AvatarProps) {
  return (
    <StyledAvatar>
      {props.user.avatarUrl ? (
        <img src={props.user.avatarUrl} />
      ) : (
        props.user.firstName.charAt(0)
      )}
    </StyledAvatar>
  );
}

export default Avatar;
