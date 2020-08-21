import styled from 'styled-components';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
}

const Avatar = styled.div<AvatarProps>`
  display: flex;
  align-items: center;

  .avatar__img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background: ${(props) => `url(${props.image})`};
    background-size: cover;
  }

  .avatar__img + div {
    padding-left: 1.5rem;
  }

  .avatar__name {
    color: ${(props) => props.theme.color.brand.primary};
    font-weight: ${(props) => props.theme.density.bold};
  }

  .avatar__date {
    color: ${(props) => props.theme.color.text.default};
    font-weight: ${(props) => props.theme.density['semi-bold']};
  }
`;

export const S = { Avatar };
