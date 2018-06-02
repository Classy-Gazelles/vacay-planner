import React from 'react';
import moment from 'moment';
import { Menu, Image, Item, Header, Card, Button, Label } from 'semantic-ui-react';

function EventsList(props) {
  return (
    <div style={{marginTop: -25}}>
      {props.eventsSelected
        .sort((a, b) => (a.dates.start.dateTime) - (b.dates.start.dateTime))
        .map((event, index) => {
          return (
            <Card fluid key={event.id}>
              <Item.Group>
                <Item>
                  <Item.Image className='event-image'
                    size='small'
                    src={ event.eventImg }
                    style={ {margin: 15} }
                  />
                  <Item.Content>
                    <Item.Header style={{marginTop: 20}} className='event-name'>
                      {`${index + 1}. ${event.name}`}
                    </Item.Header>
                    <Item.Description>
                      <strong>{event.venueName}, </strong>{event.venueAddress}
                    </Item.Description>
                    <Item.Extra>
                      <Label
                        style={ {textTransform: 'uppercase', backgroundColor: '#D3D3D3', color: '#2A2A2A'} }
                      >
                        {moment(event.start_date).format('MMM DD ddd')}
                      </Label>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Card>
          )
        })
      }
    </div>
  )
}


export default EventsList;