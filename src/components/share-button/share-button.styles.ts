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

const AbsoluteContainer = styled.div`
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -7rem;
`;

export const S = { Button, AbsoluteContainer };
