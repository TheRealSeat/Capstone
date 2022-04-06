import React from 'react'
import {
  Container,
  Header,
} from 'semantic-ui-react'

const Disclaimer = () => (
  <div>
    <Container text style={{ marginTop: '7em', marginBottom: '7em' }}>
        <Header as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Disclaimer for TheRealCapstone
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        All the information on this website - TheRealCapstone.com - is published in good faith and for general information purpose only.
        TheRealCapstone does not make any warranties about the completeness, reliability and accuracy of this information.
        Any action you take upon the information you find on this website (TheRealCapstone), is strictly at your own risk.
        TheRealCapstone will not be liable for any losses and/or damages in connection with the use of our website.
        </p>

        <p style={{ fontSize: '1.33em', color: 'white'}}>
        From our website, you can visit other websites by following hyperlinks to such external sites.
        While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites.
        These links to other websites do not imply a recommendation for all the content found on these sites.
        Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
        </p>

        <p style={{ fontSize: '1.33em', color: 'white'}}>
        Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control.
        Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
        </p>

        <Header as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Notice of Consent
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        By using our website, you hereby consent to our disclaimer and agree to its terms.
        </p>

        <Header as='h1' style={{ fontSize: '2em', color: '#fe9200'}}>
            Update
        </Header>
        <p style={{ fontSize: '1.33em', color: 'white'}}>
        Should we update, amend or make any changes to this document, those changes will be prominently posted here.
        </p>
    </Container>
  </div>
)

export default Disclaimer
