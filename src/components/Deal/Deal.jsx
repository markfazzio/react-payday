// @flow strict

import React, { memo, useState } from 'react';
import { DealCardsDeck } from '../DealCardsDeck/DealCardsDeck';
import { Deals } from '../../data/deals';
import type { DealCardDataType } from '../../common/proptypes';

const DealComponent = (): React$Node => {
  const [showing, setShowing] = useState('');

  const getDealIds = (): Array<string> => {
    let dealIds = [];
    Deals.map((deal: DealCardDataType) => {
      dealIds.push(deal.id);
    });

    return dealIds;
  };

  const setRandomDeal = () => {
    const dealIds = getDealIds();
    const randomDealNumber = Math.floor(Math.random() * dealIds.length);
    const randomDeal = dealIds[randomDealNumber];
    console.log(`Showing Deal ${randomDealNumber}`);
    setShowing(randomDeal);
  };

  return (
    <>
      <DealCardsDeck showing={showing} onClick={setRandomDeal} />
    </>
  );
};

export const Deal = memo<>(DealComponent);
