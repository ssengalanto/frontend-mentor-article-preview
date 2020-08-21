import styled from 'styled-components';

export interface CardProps extends React.ComponentPropsWithoutRef<'section'> {}

const Card = styled.section`
  border-radius: 1rem;
  box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);
`;

export const S = { Card };
