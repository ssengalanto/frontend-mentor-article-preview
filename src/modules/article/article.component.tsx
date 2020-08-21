import React from 'react';

import { useToggle } from 'hooks';
import { Avatar, ShareButton, Social } from 'components';
import image from 'assets/images/avatar-michelle.jpg';

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
          <h2 className="article__heading">
            Shift the overall look and feel by adding these wonderful touches to furniture in your
            home
          </h2>
          <p className="article__content">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
            and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>
          <div className="article__footer-desktop">
            <Avatar onClick={handleToggle} className="article__avatar" image={image} />
            <ShareButton open={open} onClick={handleToggle} />
          </div>
        </div>
        <div className="article__footer-mobile">
          {open ? (
            <Social />
          ) : (
            <Avatar onClick={handleToggle} className="article__avatar" image={image} />
          )}
          <ShareButton open={open} onClick={handleToggle} />
        </div>
      </div>
    </S.Article>
  );
};
