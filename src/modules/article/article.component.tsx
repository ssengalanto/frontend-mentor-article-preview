import React from 'react';

import { useToggle } from 'hooks';
import { Avatar, ShareButton, Social } from 'components';

import { articleMockData } from './article.mock';
import { S } from './article.syles';

export const Article: React.FC = () => {
  const {
    models: { open },
    operations: { handleToggle },
  } = useToggle();

  return (
    <S.Article isOpen={open}>
      <div className="article__row-1" />
      <div className="article__container">
        <div className="article__row-2">
          <h2 className="article__heading">{articleMockData.heading}</h2>
          <p className="article__content">{articleMockData.content}</p>
          <div className="article__footer-desktop">
            <Avatar
              onClick={handleToggle}
              className="article__avatar"
              image={articleMockData.image}
              owner={articleMockData.owner}
              date={articleMockData.date}
            />
            <ShareButton open={open} onClick={handleToggle} />
          </div>
        </div>
        <div className="article__footer-mobile">
          {open ? (
            <Social />
          ) : (
            <Avatar
              onClick={handleToggle}
              className="article__avatar"
              image={articleMockData.image}
              owner={articleMockData.owner}
              date={articleMockData.date}
            />
          )}
          <ShareButton open={open} onClick={handleToggle} />
        </div>
      </div>
    </S.Article>
  );
};
