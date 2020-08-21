import React from 'react';

import { S } from './article.syles';

export const Article: React.FC = () => (
  <S.Article>
    <div className="article__row-1" />
    <div className="article__row-2">
      <h2 className="article__heading">
        Shift the overall look and feel by adding these wonderful touches to furniture in your home
      </h2>
      <p className="article__content">
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
        uninviting. I’ve got some simple tips to help you make any room feel complete.
      </p>
    </div>
  </S.Article>
);
