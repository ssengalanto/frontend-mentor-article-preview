import styled from 'styled-components';

export interface ShareButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isOpen?: boolean;
}

const Button = styled.button<ShareButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
  animation: all 0.3s ease-in-out;
  background-color: ${(props) => {
    if (!props.isOpen) {
      return props.theme.color.bg.wash;
    }
    return props.theme.color.brand.primary;
  }};

  .share-button__icon {
    height: 1.7rem;
    width: 1.7rem;
    animation: all 0.3s ease-in-out;
    fill: ${(props) => {
      if (!props.isOpen) {
        return props.theme.color.brand.primary;
      }
      return props.theme.color.text.reverse;
    }};
  }
`;

const Social = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 3.2rem;
  min-width: 25rem;
  min-height: 5.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.brand.primary};
  box-shadow: 0px 10px 10px rgba(201, 213, 225, 0.503415);

  .social__text {
    text-transform: uppercase;
    color: ${(props) => props.theme.color.text.default};
    font-weight: ${(props) => props.theme.density['semi-bold']};
    letter-spacing: 5px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    width: 0;
    height: 0;
    border-top: ${(props) => `solid 0.9rem ${props.theme.color.brand.primary}`};
    border-left: solid 0.9rem transparent;
    border-right: solid 0.9rem transparent;
  }
`;

const AbsoluteContainer = styled.div`
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -7rem;
`;

export const S = { Button, Social, AbsoluteContainer };
