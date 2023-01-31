import Head from 'next/head';
import Script from 'next/script';
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component, useEffect } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Analytics Module"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="End-to-end Sandbox Experience"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button
      primary
      size="huge"
      onClick={() => {
        MwaAnalytics.trackEvent(MwaAnalytics.EVENT_CATEGORY.COMPONENT_EVENT, {
          eventSubType: MwaAnalytics.EVENT_TYPE.INTERACTION,
          component: {
            id: 'homepage:cta-click',
            type: 'Button',
            text: 'Custom Link Interaction',
            position: -1,
            totalCount: -1,
          },
        });
      }}
    >
      Custom Link Interaction
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a">
                  <svg
                    viewBox="0 0 27 27"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                  >
                    <path
                      d="M13.499 0C20.956 0 27 6.045 27 13.5 27 20.957 20.956 27 13.499 27 6.044 27 0 20.958 0 13.5 0 6.044 6.044 0 13.499 0zm7.076 20.18c-.425 0-.825-.127-1.22-.391-2.184-1.454-1.438-3.198.053-5.897.63-1.145 1.282-2.324 1.572-3.542.311-1.31.594-3.22-.542-4.664-.534-.677-1.347-1.2-2.413-1.554-1.112-.367-2.54-.566-4.25-.589l-.118-.003-.434.003c-1.709.023-3.139.222-4.248.589-1.068.354-1.88.876-2.415 1.554-1.136 1.445-.853 3.354-.54 4.664.288 1.218.941 2.4 1.57 3.541 1.491 2.7 2.238 4.444.052 5.898-.394.264-.792.39-1.218.39-.85 0-1.83-.425-2.352-.685l.127.223c1.08 1.621 2.468 2.483 4.01 2.483.676 0 1.39-.164 2.12-.488.775-.343 1.455-.971 1.917-1.769.46-.798.643-1.657.512-2.421-.158-.685-.516-1.606-.927-2.673-1.077-2.783-2.548-6.588-1.278-8.449.536-.785 1.5-1.169 2.945-1.174 1.447.005 2.41.389 2.946 1.174 1.272 1.861-.2 5.666-1.275 8.445-.413 1.068-.77 1.99-.928 2.67-.132.771.05 1.63.512 2.428s1.142 1.426 1.917 1.77c.73.323 1.444.487 2.12.487 1.542 0 2.93-.862 4.015-2.49l.122-.216c-.52.26-1.5.686-2.352.686z"
                      id="Combined-Shape"
                      fillRule="nonzero"
                      fill="#fff"
                    ></path>
                  </svg>
                </Menu.Item>
                <Menu.Item as="a">WOMEN</Menu.Item>
                <Menu.Item as="a">MEN</Menu.Item>
                <Menu.Item as="a">ACCESSORIES</Menu.Item>
                <Menu.Item as="a">SHOES</Menu.Item>
                <Menu.Item as="a">STUDIO</Menu.Item>
                <Menu.Item position="right">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    role="img"
                    aria-labelledby="icon_:rf:"
                    aria-hidden="false"
                  >
                    <title id="icon_:rf:">bagIcon</title>
                    <path
                      d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 0 0-.75.75v12A4.75 4.75 0 0 0 8 23.75h8A4.75 4.75 0 0 0 20.75 19V7a.76.76 0 0 0-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0 1 16 22.25H8A3.26 3.26 0 0 1 4.75 19V7.75H7l-.24 2.16.49.06a1 1 0 0 0 1.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 0 0 1.12.87l.49-.06L17 7.75h2.28L19.25 19z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider disableDynamicMediaQueries>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      MwaAnalytics.initializeAnalytics('TEST');
    }
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Script
        src="https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js"
        strategy="beforeInteractive"
        async
      />
      <Script
        src={`https://public-package-bucket-temp.s3.us-west-2.amazonaws.com/transformation-configs/latest/transformation-configs-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`https://public-package-bucket-temp.s3.us-west-2.amazonaws.com/validation-configs/latest/validation-configs-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`https://public-package-bucket-temp.s3.us-west-2.amazonaws.com/lam-model/latest/lam-model-remoteEntry.js?time=${Date.now()}`}
        strategy="beforeInteractive"
        defer
        async
      />
      <Script
        src={`https://public-package-bucket-temp.s3.us-west-2.amazonaws.com/%40lululemon/mwa-analytics/latest/browser/mwa-analytics.js?time=${Date.now()}`}
        async
        defer
        strategy="beforeInteractive"
      />
      <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="https://res.cloudinary.com/yerdle/image/upload/w_1000,h_1000,c_fit,q_auto:eco,f_auto/v1637183710/production/partners/14/inventoryItem/1437354/ed9lysxaeighwilr0fh3.jpg"
                />
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Quick Pace Short Sleeve Shirt
                </Header>
                <p style={{ fontSize: '1.33em' }}>$45.00</p>
                <Grid.Column textAlign="center">
                  <Button size="huge">ADD TO BAG</Button>
                </Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Repository</List.Item>
                    <List.Item as="a">Confluence Page</List.Item>
                    <List.Item as="a">DATASE Board</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Support</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Provided to you by DCP Platform Team
                  </Header>
                  <p>
                    For questions and inquiries please contact us via teams.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    </div>
  );
};

export default HomepageLayout;
