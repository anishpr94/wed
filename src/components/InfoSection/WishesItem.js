import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';
import { Card, Icon , Grid, Image} from 'semantic-ui-react'
import temple from '@assets/images/udupitemple1.jpeg';
import malpe from '@assets/images/malpe.jpeg';
import pithrodybeach from '@assets/images/pitrodibeach.jpeg';
import sringeri from '@assets/images/sringeri.png';
import mangalore from '@assets/images/mangalore.png';
import stmary from '@assets/images/stmary.jpeg';
import './styles.css'

function InfoItem({ image, name, infoName, description, isActive, map }) {

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
            description={description}
            extra={map}
        />
    );
  }


  return <div css={styWithAnimation(isActive)}>{renderItem1()}</div>;
}

InfoItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  map: string,
  isActive: bool.isRequired,
};

export default React.memo(InfoItem);

export const GridExampleDividedPhrase = () => (
    <Grid columns='two' celled>
      <Grid.Row>
        <Grid.Column>
          <h4>Shri Krishna Matha</h4>
          <span className="infoName">One of the most famous temple in Udupi, <a href="https://goo.gl/maps/bCbAbTVu6wAU3Lfw9">Click to get location</a></span>
          <img src={temple} alt="user" loading="lazy" />
            <p className="description">Popular Temple located in Cart Street. There are other Mathas in the same street. Walkable from Meenakshi Inn(~500m).</p>
        </Grid.Column>
        <Grid.Column>
          <h4>Malpe Beach</h4>
          <span className="infoName">For beach lovers, <a href="https://goo.gl/maps/9MHAbmWLga8WD6rR8">Click to get location</a></span>
          <img src={malpe} alt="user" loading="lazy" />
            <p className="description">There are buses that go to Malpe from City Bus stand(walkable from Meenakshi Inn). You can also take auto. There are a lot of activities on the beach like Para-sailing, Speed boats, Kite Flying etc. It is safe to take dip in the beach. There are good places to eat around. Consider trying churmuri as walk around the beach. The place can get very crowded in the evening. </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <h4>Pithrody Udyavar Beach</h4>
        <span className="infoName">For those who love driving, <a href="https://goo.gl/maps/jhrM3o38EX5W72G78">Click to get location</a></span>
        <img src={pithrodybeach} alt="user" loading="lazy" />
          <p className="description">A beautiful strip of land between a river and a sea in India? Sign us up! In the small town of Udyavara, Udupi (Karnataka), you’ll find the stunning Pithrody beach best explored on a drive upon a small stretch of road. It sits serenely between the Udyavara River on one side and the Arabian Sea on the other!</p>
      </Grid.Column>
        <Grid.Column>
          <h4>St. Mary's Islands</h4>
          <span className="infoName">Mesmerizing Island, <a href="https://goo.gl/maps/m1c7437AwZcsYjxv7">Click to get location</a></span>
          <img src={stmary} alt="user" loading="lazy" />
            <p className="description">St. Mary's Islands, also known as Coconut Island and Thonsepar, are a set of four small islands in the Arabian Sea off the coast of Malpe in Udupi, Karnataka, India. They are known for their distinctive geological formation of columnar rhyolitic lava. </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <h4>Sringeri</h4>
          <span className="infoName">A divine place, <a href="https://goo.gl/maps/a3d2TWd1GHvhzohS7">Click to get location</a></span>
          <img src={sringeri} alt="user" loading="lazy" />
          <p className="description">Sringeri also called Sri Kshetra Shringeri is a hill town and Taluk headquarters located in Chikkamagaluru district in the Indian state of Karnataka. It is the site of the first maṭha established by Adi Shankara, Hindu theologian and exponent of the Advaita Vedanta philosophy, in the 8th century CE</p>
        </Grid.Column>
        <Grid.Column>
          <h4>St. Mary's Islands</h4>
          <span className="infoName">Mesmerizing Island, <a href="https://goo.gl/maps/m1c7437AwZcsYjxv7">Click to get location</a></span>
          <img src={mangalore} alt="user" loading="lazy" />
          <p className="description">Mangalore (or Mangaluru) is an Arabian Sea port and a major commercial center in the Indian state of Karnataka. It's home to the Kadri Manjunath Temple, known for its bronze statues, and the 9th-century Mangaladevi Temple. Its Catholic sites include Milagres Church, dating to the 17th century, and St. Aloysious Chapel, which features interior paintings. Tannirbhavi Beach is popular for its sunset views.</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)
