import React from "react";
import 
{
  Button,
  Container,
  Form,
  Grid,
  Icon,
  Label,
  Segment,
  Image,
  Header,
  Divider,
  List,
  Menu, 
  Dropdown
} from "semantic-ui-react";
import Crowd_1 from './Crowd_1.jpg'
import logo from './logo.svg'
import Crowd_3 from './Crowd_3.jpg'


import "./HomePage.css";
const HomePage = () => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <div>
        <header className="HomePage-header">
          <Container style={{ marginTop: "30vh" }}>
            <h1 className="header-container">
              <Grid columns="2">
                <Grid.Row>
                  <Grid.Column floated textAlign="right">
                    <div className="white-large">Where your seat is placed</div>
                  </Grid.Column>
                  <Grid.Column textAlign="left">
                    <div className="orange-large">TheRealSeat</div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={6}></Grid>
            </h1>

            <div>
              <Button size="huge" inverted style={{ marginTop: "20px" }}>
                Get started
                <Icon name="right arrow" inverted />
              </Button>
            </div>
          </Container>
        </header>
      </div>

      <div>
      <Container>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white'}}>
              Experience Your Next Event To Remember
            </Header>
            <p style={{ fontSize: '1.33em', color: '#b3b3b3' }}>
              Tickets for all of your favorite events offered!
            </p>
            <Header as='h3' style={{ fontSize: '2em', color: '#fe9200' }}>
              Fans First
            </Header>
            <p style={{ fontSize: '1.33em', color: '#b3b3b3' }}>
              Fans are the core of all events, and we provide the best service. Organizers directly deliver through our provided tools to deliver exceptional products efficiently.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='large' src={Crowd_1} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Out Events</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
              Browse By Your Likings
            </Header>
            <p style={{ fontSize: '4em', textAlign: 'center' }}></p>
            <Menu vertical>
              <Dropdown item textAlign='center' text='Categories'>
                <Dropdown.Menu>
                  <Dropdown.Item>Concerts</Dropdown.Item>
                  <Dropdown.Item>Sports</Dropdown.Item>
                  <Dropdown.Item>Conventions</Dropdown.Item>
                  <Dropdown.Item>Artistic Venues</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em', color: '#fe9200' }}>
              TheRealSeat
            </Header>
            <p style={{ fontSize: '1.33em', color: 'white' }}>
              <Image avatar src={logo} />
               Sell Your Seats, Know Your Fans
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <div>
      <Container>
      <Image src={Crowd_3}/>
      </Container>
    </div>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em', color: '#fe9200' }}>
          Fan Servicing
        </Header>
        <p style={{ fontSize: '1.33em', color: '#b3b3b3'}}>
          At TheRealSeat, we provide fans with the upmost quality of serivce.
          The process of purchasing your next event is simplified to a few easy steps.
          Our service handles all of the bookings directly with event organizers for reliable transactions.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'style={{color: 'white'}}>Services</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em', color: '#fe9200' }}>
          Organizer Servicing
        </Header>
        <p style={{ fontSize: '1.33em', color: '#b3b3b3' }}>
          Through our provided tools and methods of production, organizers can directly offer fans an unparalleled experience.
          Organizers can depend on us to deliver exceptional products fast and efficiently.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
      </Container>
    </Segment>
  </Container>
      </div>

      <div>
        <div>
          <header className="Form-header">
            <Container style={{ marginTop: "30vh" }}>
              <h1 className="header-container">
                <div className="dark-large" style={{ marginRight: "20px" }}>
                  Join
                </div>

                <div className="orange-large"> TheRealSeat </div>

                <div className="dark-large" style={{ marginLeft: "20px" }}>
                  Today
                </div>
              </h1>
              <p style={{fontSize:'20px',fontWeight:'inherit'}}>
              Sign up to receive our latest updates and developments. Plus get information about early access and upcoming events.
              </p>
              <Form>
                <Grid columns="1">
                  <Grid.Row>
                    <Form.Field >
                      <input placeholder="Enter Name" style={{backgroundColor:'GrayText',maxWidth:'60%'}}/>
                    </Form.Field>
                  </Grid.Row>
                  <Grid.Row>
                    <Form.Field>
                      <input placeholder="Enter Email" style={{backgroundColor:'GrayText',maxWidth:'60%'}} />
                    </Form.Field>
                  </Grid.Row>
                  <Grid.Row>
                    <Form.Field>
                      <Button type="submit" color="grey"  size="massive" circular >Join Today</Button>
                    </Form.Field>
                  </Grid.Row>
                </Grid>
              </Form>
            </Container>
          </header>
        </div>
      </div>
      <div>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Vision</List.Item>
                <List.Item as='a'>Contact</List.Item>
                <List.Item as='a'>Careers</List.Item>
                <List.Item as='a'>FAQ</List.Item>

              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Organizer</List.Item>
                <List.Item as='a'>Fan</List.Item>
                <List.Item as='a'>Plans</List.Item>
                <List.Item as='a'>Pricing</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h2' inverted style={{color: '#fe9200'}}>
              <Image avatar src={logo} />
                TheRealSeat
              </Header>
              <p>
                Sell Your Seats, Know Your Fans
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
      </div>
      <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
  </div>
    </Segment>
  );
};

export default HomePage;