import React from 'react'
import {Container, List} from 'semantic-ui-react'

const RandomInfo = () => (
    <Container textAlign='left'>
      <Container textAlign='center'>
      <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
        <h2 className="main-font">Things to remember when you're visiting Udupi</h2>
      </div>
      </Container>
    <List>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header as='a'>Transport</List.Header>
          <List.Description>
            Going around Udupi and Manipal you can take Auto. All Udupi auto run on meter, if the driver does not turn on the meter please ask them. There is no uber.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header as='a'>Temperature</List.Header>
          <List.Description>
            Udupi in March/April is very hot. Take necessary precautions if you are travelling out.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header as='a'>Evening closure</List.Header>
          <List.Description>
            Most places in Udupi close by 8-8:30pm. Most shops operate till noon or stay shut on Sundays.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header as='a'>Money in hand</List.Header>
          <List.Description>
            Please keep cash handy. Not everyone uses Google Pay/Phone Pe in Udupi
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='marker' />
        <List.Content>
          <List.Header as='a'>Medical help</List.Header>
          <List.Description>
            Radha Medical - Open 24X7, Hitech Medicare Hospital near Shamili hall.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
    </Container>
)

export default RandomInfo
