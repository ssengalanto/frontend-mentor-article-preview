import styled from 'styled-components';

import bg from 'assets/images/drawers.jpg';

import { Card } from 'components';

const Article = styled(Card)<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 73rem;

  @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
    flex-direction: row;
  }

  h2 + p {
    padding-top: 2rem;
  }

  .article__container {
    display: flex;
    flex-direction: column;
  }

  .article__row-1 {
    flex: 1 1 40%;
    min-height: 20rem;
    background: url(${bg});
    background-size: cover;
    border-radius: 1rem 1rem 0 0;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      min-width: 28.5rem;
      border-radius: 1rem 0 0 1rem;
    }
  }

  .article__row-2 {
    flex: 1 1 60%;
    padding: 3.2rem;
    padding-bottom: 2rem;
    background-color: ${(props) => props.theme.color.bg.default};

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      padding: 3.2rem;
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
  }

  .article__footer-desktop {
    display: none;

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
    }
  }

  .article__footer-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8rem;
    padding: 2rem 3.2rem;
    border-radius: 0 0 1rem 1rem;
    background-color: ${(props) =>
      props.isOpen ? props.theme.color.brand.primary : props.theme.color.bg.default};

    @media (min-width: ${(props) => props.theme.breakpoint.desktop}) {
      display: none;
    }
  }
`;

export const S = { Article };
