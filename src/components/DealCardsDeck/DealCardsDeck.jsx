// @flow strict

import React, { memo } from 'react';
import styled from 'styled-components';
import { DealCard, StyledDealCard } from '../DealCard/DealCard';
import { DealCardDimensions } from '../../common/dimensions';
import type { DealCardDataType, DealCardsDeckPropsType } from '../../common/proptypes';

import { Deals } from '../../data/deals';

const StyledDealCardsContainer = styled.div`
  display: flex;
`;

const StyledDealCardsDeck = styled.div`
  position: relative;
  height: ${DealCardDimensions.height + 30}px;
  width: ${DealCardDimensions.width + 30}px;

  ${StyledDealCard} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const DealCardsDeckComponent = (props: DealCardsDeckPropsType): React$Node => {

  const {
    onClick,
    showing
  } = props;

  const renderDeals = (): React$Node => {
    return Deals.map((deal: DealCardDataType): React$Node => {
      return (
        <DealCard
          key={deal.id}
          cost={deal.cost}
          value={deal.value}
          commission={deal.commission}
          title={deal.title}
          image={deal.image}
        />
      )
    });
  };

  const getDealToShow = (): ?React$Node => {
    const showingDeal = Deals.find((deal: DealCardDataType): React$Node => {
      return deal.id === showing;
    });
    if (showingDeal) {
      return (
        <DealCard
          key={showingDeal.id}
          cost={showingDeal.cost}
          value={showingDeal.value}
          commission={showingDeal.commission}
          title={showingDeal.title}
          image={showingDeal.image}
          showing
        />
      );
    }
  };

  return (
    <StyledDealCardsContainer>
      <StyledDealCardsDeck onClick={onClick}>
        { renderDeals() }
      </StyledDealCardsDeck>
      { getDealToShow() }
    </StyledDealCardsContainer>
  );
};

export const DealCardsDeck = memo<DealCardsDeckPropsType>(
  DealCardsDeckComponent
);
