// @flow strict

const DealCardSizes = {
  original: {
    height: 126,
    width: 216,
    imageWrapper: {
      height: 50
    }
  },
  large: {
    height: 252,
    width: 432,
    imageWrapper: {
      height: 100
    }
  },
};

export const DealCardDimensions = {
  height: DealCardSizes.large.height,
  width: DealCardSizes.large.width,
  imageWrapper: DealCardSizes.large.imageWrapper
};
