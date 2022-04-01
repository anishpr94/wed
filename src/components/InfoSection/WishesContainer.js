import React, {useState} from 'react';

import InfoItem , {GridExampleDividedPhrase} from './WishesItem';
import {wishlist} from './wishlist-data';

const INTERVAL_SLIDE = 35000;

function InfoContainer() {

  const renderWishlist = () => {
    return wishlist.map((w, index) => <InfoItem key={index} {...w} />);
  };
  return (
    <div className="wrap-testimony-1">
      <GridExampleDividedPhrase/>
    </div>
  );
}

export default React.memo(InfoContainer);
