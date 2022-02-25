import './Footer.scss'
import logo from '../Assets/Images/logo.svg';
import {
    Button,
    Container,
    Grid,
    Icon,
    Segment,
    Image,
    Header,
    List
} from "semantic-ui-react";

function Footer() {
    return (
        <div className="Footer">
            <div className='Footer-container'>
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
                                    <Header as='h2' inverted style={{ color: '#fe9200' }}>
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
                    <a href="https://www.youtube.com/channel/UCkocc2mzcG0fDg80vAtJgwA">
                        <Button color='youtube'>
                            <Icon name='youtube' /> YouTube
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;