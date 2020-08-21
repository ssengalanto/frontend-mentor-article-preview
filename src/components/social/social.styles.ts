import styled from 'styled-components';

const Social = styled.div`
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

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
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
  }
`;

export const S = { Social };
