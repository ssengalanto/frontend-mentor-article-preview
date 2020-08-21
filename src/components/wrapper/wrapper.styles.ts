import styled from 'styled-components';

export interface WrapperProps extends React.ComponentPropsWithoutRef<'div'> {}

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.bg.wash};
`;

export const S = { Wrapper };
