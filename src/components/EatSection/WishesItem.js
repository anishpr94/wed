import React from 'react';
import {Item} from 'semantic-ui-react'
import clubec from '@assets/images/clubec.png';
import mtr from '@assets/images/mtr.png';
import macholi from '@assets/images/macholi.png';
import froth from '@assets/images/froth.png';
import woodlands from '@assets/images/woodlands.png';
import diana from '@assets/images/diana.png';
import './styles.css'

export const ItemExampleDescriptions = () => (
    <Item.Group divided>
      <Item>
        <Item.Image size='small' src={mtr} />

        <Item.Content>
          <Item.Header as='a'>MTR</Item.Header>
          <Item.Description>
            <p>
                <blockquote>"Tasty mini meals,masala dosa ,very good coffee and friendly staff👍"</blockquote>
                <a href="https://maps.google.com/maps?ll=13.329438,74.743853&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=14464350242035662183">Click to get location</a>
            </p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={froth} />

        <Item.Content>
          <Item.Header as='a'>Froth on Top</Item.Header>
            <Item.Description>
                <p>
                    <blockquote>"It's a very quiet place with soft music and has the best best food in town 😋.."</blockquote>
                    <a href="https://maps.google.com/maps?ll=13.35842,74.784282&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=501956905267910155">Click to get location</a>
                </p>
            </Item.Description>
        </Item.Content>
      </Item>

        <Item>
            <Item.Image size='small' src={woodlands} />

            <Item.Content>
                <Item.Header as='a'>Woodlands Restaurant</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"If you are an vegetarian, go and taste it. 👍 Supply is very good, food quality is excellent. First time I am visiting this restaurant, I liked very much and reasonable price.
                            #Recommended</blockquote>
                        <a href="https://maps.google.com/maps?ll=13.339263,74.751128&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8377971743421883162">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={clubec} />

            <Item.Content>
                <Item.Header as='a'>Club Ecstasy</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"Good ambiance good music one of the happening place in Manipal"</blockquote>
                        <a href="https://maps.google.com/maps?ll=13.361187,74.783003&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=5047105634029338341">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={macholi} />

            <Item.Content>
                <Item.Header as='a'>Machali Udupi</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"They serve the freshest fish, and their ghee roast is mind blowing."</blockquote>
                        <a href="https://maps.google.com/maps?ll=13.336851,74.740051&z=10&t=m&hl=en&gl=IN&mapclient=embed&cid=10867398148937963394">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={diana} />

            <Item.Content>
                <Item.Header as='a'>Hotel Diana</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"Good ambiance, good spaces
                            One of the famous hotel for Gadbad icecream in Udupi city..also good place to have quick quality varieties of snacks items like set dosa, pavbhaji, cutlets, chole bhature and many more
                            Also there is one good  Panwala Yadavji for variety of Pans"</blockquote>
                        <a href="https://goo.gl/maps/yVnmAWvLinRizEDA6">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)
