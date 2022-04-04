import React from 'react'
import {
  Container,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react'
import Careers from './Careers.jpg';
import Vision from './Vision.jpg';

const About = () => (
  <div>
    <Container text style={{ marginTop: '7em', marginBottom: '7em' }}>
        <Header id="Vision" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Vision
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        Revolutionoizing the approach of ticketing systems through modern algorithmic tools for both customers and organizers alike.
        The path taken is optimizing efficiently while maintining quality, no shortcuts or deceptions.
        TheRealSeat is here to become the top ticketing system in the world.
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Vision} />
          </Grid.Column>

        <Header id="Contact" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Contact
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
          <ul>
            Send the following to contact@therealseat.com
            <li>Name</li>
            <li>Company Name</li>
            <li>Reason of Contact</li>
            <li>Time Proximity</li>
          </ul>
        </p>

        <Header id="Careers" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Careers
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        There are many opportunities to expand upon your professional career here @ TheRealSeat.
          <ul>
              Tech Roles - We are a tech focused organization
              <li>ML Engineer - Develop production-ready machine learning models and deploy them into production. Understand cloud deployment and CI/CD.</li>
              <li>Data Scientist - Undesrtand analytics and visualizations. Comfortable with Python.</li>
              <li>Front-End Engineer - Develop client-facing web applications. Comfortable with React 16.8+, Hooks, Redux.</li>
              <li>Visualization Engineer - Develop advanced visualizations for production applications. Comfortable with design, HTML/CSS and D3.</li>
          </ul>
        </p>
        <Grid.Column floated='right' width={10}>
            <Image size='large' src={Careers} />
          </Grid.Column>

        <Header id="FAQ" as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            FAQ
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        Coming Soon...
        </p>
    </Container>
  </div>
)

export default About