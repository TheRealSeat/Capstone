import './Footer.scss'
import logo from '../../Assets/Images/logo.svg';
import {
    Button,
    Container,
    Grid,
    Icon,
    Segment,
    Image,
    Header,
    List,
} from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";

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
                                        <List.Item as={Link} to='/About#Vision'>Vision</List.Item>
                                        <List.Item as={Link} to='/About#Contact'>Contact</List.Item>
                                        <List.Item as={Link} to='/About#Careers'>Careers</List.Item>
                                        <List.Item as={Link} to='/About#FAQ'>FAQ</List.Item>

                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services' />
                                    <List link inverted>
                                        <List.Item as={Link} to='/Services#Organizer'>Organizer</List.Item>
                                        <List.Item as={Link} to='/Services#Fan'>Fan</List.Item>
                                        <List.Item as={Link} to='/Services#Plans'>Plans</List.Item>
                                        <List.Item as={Link} to='/Services#Pricing'>Pricing</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h2' inverted style={{ color: '#fe9200' }}>
                                        <Image avatar src={logo} />
                                        TheRealCapstone
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