/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageSection,
  EuiPanel,
  EuiTitle,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiHealth,
  EuiSpacer,
  EuiLink,
  EuiText,
  EuiTextColor,
  EuiSearchBar,
  EuiHorizontalRule,
  useEuiBackgroundColor,
  useEuiTheme,
} from '@elastic/eui';
import Navbar from '../../components/navbar';

const CloudHomepageLayout = ({ children, route, icNumber }) => {
  const router = useRouter();
  const { euiTheme } = useEuiTheme();

  const iconStyle = css`
    background: ${useEuiBackgroundColor('subdued')};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
  `;

  const iconTitle = (icon, title) => {
    return (
      <EuiFlexGroup alignItems="center" gutterSize="s">
        <EuiFlexItem grow={false}>
          <div css={iconStyle}>
            <EuiIcon type={icon} size="m" />
          </div>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiTitle size="xs">
            <h4>{title}</h4>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  };

  return (
    <>
      <Navbar
        isCloud
        icNumber={icNumber}
        breadcrumbs={[
          {
            text: 'Cloud',
          },
        ]}
      />
      <EuiPage>
        <EuiPageBody
          paddingSize="none"
          css={css`
            margin: auto;
            max-width: 1600px;
          `}>
          <EuiPageSection>
            <EuiFlexGroup gutterSize="l" alignItems="flexStart">
              <EuiFlexItem grow={2}>
                <EuiFlexGroup alignItems="center">
                  <EuiFlexItem>
                    <EuiTitle size="s">
                      <h3>Elastic Cloud</h3>
                    </EuiTitle>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButton
                      iconType="plusInCircle"
                      fill
                      onClick={() => router.push(route)}>
                      Create
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
                {children}
                <EuiSpacer size="l" />
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiPanel grow={false} paddingSize="l">
                      {iconTitle('documents', 'Documentation')}
                      <EuiSpacer size="m" />
                      <EuiSearchBar box={{ placeholder: 'Help me find...' }} />
                      <EuiSpacer size="m" />
                      <EuiLink href="#">
                        Elasticsearch Service on Elastic Cloud documentation
                      </EuiLink>
                      <EuiSpacer size="m" />
                      <EuiLink href="#">Elasticsearch documentation</EuiLink>
                      <EuiSpacer size="m" />
                      <EuiLink href="">Elasticsearch REST API</EuiLink>
                    </EuiPanel>
                    <EuiSpacer size="l" />
                    <EuiPanel grow={false} paddingSize="l">
                      {iconTitle('help', 'Support')}
                      <EuiSpacer size="m" />
                      <EuiText size="s">
                        Having some trouble? Reach out to us.
                      </EuiText>
                      <EuiSpacer size="m" />
                      <EuiButton>Contact support</EuiButton>
                    </EuiPanel>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiPanel grow={false} paddingSize="l">
                      {iconTitle('users', 'Community')}
                      <EuiSpacer size="m" />
                      <EuiLink href="#">Join an ElasticON event</EuiLink>
                      <EuiSpacer size="s" />
                      <EuiText size="s">
                        Hear success stories, lessons learned, tips, tricks,
                        best practices, and funny anecdotes…
                      </EuiText>
                      <EuiSpacer size="l" />
                      <EuiLink href="#">
                        Elastic Blasticians presents: A Fireside Chat with Dr.
                        William Scott, IBM Master
                      </EuiLink>
                      <EuiSpacer size="s" />
                      <EuiText size="xs">FEBRUARY 16, 18:00</EuiText>
                      <EuiSpacer size="l" />
                      <EuiLink href="#">
                        Improving visibility into modern telco networks: A
                        consolidated look on 3G/4G to 5G, NWDAF and Radio
                        Analytics
                      </EuiLink>
                      <EuiSpacer size="s" />
                      <EuiText size="xs">FEBRUARY 21, 9:00</EuiText>
                      <EuiSpacer size="m" />
                      <EuiButton href="#">Events portal</EuiButton>
                      <EuiHorizontalRule />
                      <EuiText size="s">
                        Engage with our community!
                        <a href="#">Visit our forum</a>,
                        <a href="#">join us on Slack</a>, or
                        <a href="">contribute to the Elastic Stack on GitHub</a>
                        .
                      </EuiText>
                    </EuiPanel>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem grow={1}>
                <EuiFlexGroup direction="column">
                  <EuiFlexItem>
                    <EuiPanel grow={false} paddingSize="l">
                      {iconTitle('cloudSunny', 'Cloud status')}
                      <EuiSpacer size="m" />
                      <EuiHealth color="success">
                        All systems operational
                      </EuiHealth>
                    </EuiPanel>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiPanel paddingSize="l">
                      {iconTitle('documentEdit', 'News')}
                      <EuiSpacer size="m" />
                      <EuiLink href="#">
                        <EuiText
                          size="s"
                          css={css`
                            font-weight: ${euiTheme.font.weight.medium};
                          `}>
                          How to build comprehensive customer financial profiles
                          with Elastic Cloud and Google Cloud
                        </EuiText>
                      </EuiLink>
                      <EuiSpacer size="s" />
                      <small>FEBRUARY 14, 2023</small> &nbsp;
                      <EuiTextColor color="accent">New!</EuiTextColor>
                      <EuiSpacer size="m" />
                      <EuiLink href="#">
                        <EuiText
                          size="s"
                          css={css`
                            font-weight: ${euiTheme.font.weight.medium};
                          `}>
                          How tough was your workout? Take a closer look at
                          Strava data through Kibana Lens
                        </EuiText>
                      </EuiLink>
                      <EuiSpacer size="s" />
                      <small>FEBRUARY 13, 2023</small> &nbsp;
                      <EuiTextColor color="accent">New</EuiTextColor>
                      <EuiSpacer size="m" />
                      <EuiLink href="#">
                        <EuiText
                          size="s"
                          css={css`
                            font-weight: ${euiTheme.font.weight.medium};
                          `}>
                          Optimizing Strava data collection with Elastic APM and
                          a custom script solution
                        </EuiText>
                      </EuiLink>
                      <EuiSpacer size="s" />
                      <small>FEBRUARY 6, 2023</small> &nbsp;
                      <EuiTextColor color="accent">New</EuiTextColor>
                    </EuiPanel>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiPanel grow={false} paddingSize="l">
                      {iconTitle('training', 'Training')}
                      <EuiSpacer size="m" />
                      <EuiText>
                        <h5>Go deeper with hands-on training</h5>
                      </EuiText>
                      <EuiSpacer size="m" />
                      <EuiText size="s">
                        Build essential skills and learn Elastic with free
                        introductory training in the Elastic Learning Portal
                      </EuiText>
                      <EuiSpacer size="m" />
                      <EuiButton>Elastic Learning Portal</EuiButton>
                    </EuiPanel>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageSection>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default CloudHomepageLayout;
