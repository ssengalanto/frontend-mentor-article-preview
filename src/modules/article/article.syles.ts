import styled from 'styled-components';

import bg from 'assets/images/drawers.jpg';

import { Card } from 'components';

const Article = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 73rem;

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    flex-direction: row;
  }

  h2 + p {
    padding-top: 2rem;
  }

  .article__row-1 {
    flex: 1 1 40%;
    min-height: 20rem;
    background: url(${bg});
    background-size: cover;
    border-radius: 1rem 1rem 0 0;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      border-radius: 1rem 0 0 1rem;
    }
  }

  .article__row-2 {
    flex: 1 1 60%;
    padding: 3.2rem;
    background-color: ${(props) => props.theme.color.bg.default};
    border-radius: 0 0 1rem 1rem;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      border-radius: 0 1rem 1rem 0;
    }
  }

  .article__heading {
    font-size: 1.6rem;
    line-height: 24px;
    color: ${(props) => props.theme.color.brand.primary};
    font-weight: ${(props) => props.theme.density.bold};
    letter-spacing: 0.2px;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      font-size: 2rem;
      line-height: 28px;
      letter-spacing: 0.25px;
    }
  }

  .article__content {
    color: ${(props) => props.theme.color.text.default};
    font-weight: ${(props) => props.theme.density['semi-bold']};
    line-height: 20px;
    letter-spacing: 0.121875px;
  }

  .article__avatar {
    padding-top: 2rem;
  }
`;

export const S = { Article };
