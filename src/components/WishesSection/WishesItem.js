import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';
import { Card, Icon } from 'semantic-ui-react'
import './styles.css'

function WishesItem({ image, name, infoName, description, isActive, map }) {

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className='testimony-slide text-center active'>
          <figure>
            <img src={image} alt="user" loading="lazy" />
          </figure>
          <h4>{name}</h4>
          <span className="infoName">{infoName}</span>
          <blockquote>
            <p className="description">{description}</p>
          </blockquote>
          <blockquote>
            <p className="description">{map}</p>
          </blockquote>
        </div>
      </div>
    );
  };

  const renderItem1 = () => {
    return (
        <Card
            image={image}
            header={name}
            meta={description}
            extra={map}
        />
    );
  }


  return <div css={styWithAnimation(isActive)}>{renderItem1()}</div>;
}

WishesItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  map: string,
  isActive: bool.isRequired,
};

export default React.memo(WishesItem);
