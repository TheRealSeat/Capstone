import React from 'react'
import {
  Container,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react'
import Fan from './Fan.jpg';
import  Handshake  from './Handshake.jpg';
import Future from './Future.jpg';
import Pricing from './Pricing.jpg';

const Services = () => (
  <div>
    <Container text style={{ marginTop: '7em', marginBottom: '7em' }}>
        <Header id="Organizer" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Organizer
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        As an organizer, the data provided is of most importance to accomadate your customers.
        At TheRealSeat, we not only provide complete analytics of all the current and future events, we also simplify it with our automated tools.
        Take your ticketing to another level with an easily understandable and aesthetically pleasing graphical user interface.
        Analyze complex data structures, to accomodate for greater profits while maintining fans interest at heart, all without having to write a single line of code.
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Handshake} />
          </Grid.Column>

        <Header id="Fan" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Fan
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        TheRealSeat understands that the fans are the core of every event, that is why we work directly with organizers for better accomodations.
        This direct commuunication and sharing of data provides a much more expanded view of how to provide the best events and pricing for fans.
        We not only want you to enjoy your time at the events, we hope to inform you about other events you'd be interested in.
        This becomes a reality of attending multiple events thanks to TheRealSeat, you can assure that economics won't be a factor for unnatending.
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Fan} />
          </Grid.Column>

        <Header id="Plans" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Plans
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        The future is bright for us here at TheRealSeat, we plan on expanding throughout the whole nation so more people can have access to the benefits we provide.
        With the slow decimiation of COVID-19, we plan on working with various different event organizers to rewelcome safe and healthy social gatherings.
        We plan on being the best ticket purchase site in the world, nothing less.
        Our goals will be accomplished while always maintaining the customers at heart.
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Future} />
          </Grid.Column>

        <Header as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Pricing
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        Pricing is calculated based on different features:
        <ul>
        <li>Event Venue - The location that will be hosting said event</li>
        <li>Seat Location - The specific area and location of said seat</li>
        <li>Analytical Data - Data gathered to secure profitable earnings for the organizer and assuring fair price for fans</li>
        </ul>
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Pricing} />
        </Grid.Column>
    </Container>
  </div>
)

export default Services