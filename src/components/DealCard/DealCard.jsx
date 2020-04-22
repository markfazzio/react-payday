// @flow strict

import React, { memo } from 'react';
import type { DealCardPropsType } from '../../common/proptypes';

const DealCardComponent = (props: DealCardPropsType): React$Node => {
  const { title } = props;

  return (
    <div>
      Deal: {title}
    </div>
  );
};

export const DealCard = memo<DealCardPropsType>(DealCardComponent);