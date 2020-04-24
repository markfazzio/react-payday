// @flow strict

export type DealCardDataType = {
  commission: number,
  cost: number,
  id: string,
  title: string,
  value: number,
  image: HTMLElement,
  showing?: boolean
};

export type DealCardPropsType = {
  ...$Exact<DealCardDataType>,
  image: string
};

export type DealCardsDeckPropsType = {
  showing: string
};
