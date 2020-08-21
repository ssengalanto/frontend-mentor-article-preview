import styled from 'styled-components';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
}

const Avatar = styled.div<AvatarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar__details {
    display: flex;
  }

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

  .avatar__btn {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => props.theme.color.bg.wash};
  }

  .avatar__arrow-icon {
    height: 1.7rem;
    width: 1.7rem;
    fill: ${(props) => props.theme.color.brand.primary};
  }
`;

export const S = { Avatar };
