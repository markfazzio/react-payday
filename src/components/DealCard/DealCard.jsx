// @flow strict

import React, { memo } from 'react';
import styled from 'styled-components';
import { Borders } from '../../common/borders';
import { MainColors } from '../../common/color';
import type { DealCardPropsType } from '../../common/proptypes';
import { DealCardDimensions } from '../../common/dimensions';

import DealCardBackImage from '../../assets/images/deal_card_back.svg';

export const StyledDealCard = styled.div`
  background-color: ${MainColors.white};
  border: ${Borders.dealCard.outer};
  box-shadow: 0px 0px 4px 0px rgba(184,184,184,1);
  box-sizing: border-box;
  display: flex;
  height: ${DealCardDimensions.height}px;
  padding: 20px;
  width: ${DealCardDimensions.width}px;
`;

const StyledDealCardInner = styled.div`
  border: ${Borders.dealCard.inner};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledDealCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

const StyledDealCardTitle = styled.h3`
  font-family: 'petit_formal_scriptregular';
  font-size: 24px;
  margin: 0;
`;

const StyledDealCardImage = styled(
  // eslint-disable-next-line no-unused-vars
  ({ image, ...rest }: DealCardPropsType): React$Node => <div {...rest} />)`
    height: ${DealCardDimensions.imageWrapper.height}px;
    margin-bottom: 5px;
    overflow: hidden;
    border-top: ${Borders.dealCard.image.top};
    border-bottom: ${Borders.dealCard.image.bottom};

  ${(props: { image: string }): string => `
    background-image: url(${props.image});
  `}
`;

const StyledDealCardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledDealCardInfoColumn = styled.div`
  text-align: center;
`;

const StyledDealCardInfoColumnTitle = styled.h6`
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
`;

const StyledDealCardInfoColumnValue = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: normal;
`;

const StyledDealCardBack = styled.div`
  background-image: url(${DealCardBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const DealCardComponent = (props: DealCardPropsType): React$Node => {
  const {
    commission,
    cost,
    image,
    title,
    showing,
    value
  } = props;

  return (
    <StyledDealCard>
    { showing ?
      <StyledDealCardInner>
        <StyledDealCardHeader>
          <StyledDealCardTitle>
            {title}
          </StyledDealCardTitle>
        </StyledDealCardHeader>
        <StyledDealCardImage>
          <img src={image} alt="Some Text" />
        </StyledDealCardImage>
        <StyledDealCardInfo>
          <StyledDealCardInfoColumn>
            <StyledDealCardInfoColumnTitle>
              Cost
            </StyledDealCardInfoColumnTitle>
            <StyledDealCardInfoColumnValue>
              { cost }
            </StyledDealCardInfoColumnValue>
          </StyledDealCardInfoColumn>
          <StyledDealCardInfoColumn>
            <StyledDealCardInfoColumnTitle>
              Value
            </StyledDealCardInfoColumnTitle>
            <StyledDealCardInfoColumnValue>
              { value }
            </StyledDealCardInfoColumnValue>
          </StyledDealCardInfoColumn>
          <StyledDealCardInfoColumn>
            <StyledDealCardInfoColumnTitle>
              Commission
            </StyledDealCardInfoColumnTitle>
            <StyledDealCardInfoColumnValue>
              { commission }
            </StyledDealCardInfoColumnValue>
          </StyledDealCardInfoColumn>
        </StyledDealCardInfo>
      </StyledDealCardInner>
    : (
      <StyledDealCardBack />
    )}
    </StyledDealCard>
  );
};

export const DealCard = memo<DealCardPropsType>(DealCardComponent);