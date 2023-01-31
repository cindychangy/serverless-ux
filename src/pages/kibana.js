/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import {
  EuiPageTemplate,
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiButton,
  EuiButtonEmpty,
  EuiImage,
  EuiAvatar,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiText,
} from '@elastic/eui';
import Account from '../../components/account';

const KibanaHome = () => {
  const router = useRouter();

  if (typeof HTMLElement !== `undefined`) {
    return (
      <>
        <EuiHeader
          theme="dark"
          sections={[
            {
              items: [
                <EuiHeaderLogo iconType="logoElastic">Elastic</EuiHeaderLogo>,
              ],
              borders: 'none',
            },
            {
              items: [
                <EuiButton
                  color="success"
                  size="s"
                  onClick={() => router.push('/8.6/guided-setup')}
                  key="onboarding-setup-button"
                  fill
                  style={{ margin: '0 10px' }}>
                  Launch Guided Setup
                </EuiButton>,
                <EuiHeaderSectionItemButton flush="both">
                  <Account showGuideLink />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton flush="both">
                  <EuiAvatar color="#25282f" iconType="cheer" name="account" />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton
                  key="user"
                  aria-label="Account menu">
                  <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
                </EuiHeaderSectionItemButton>,
              ],
              borders: 'none',
            },
          ]}
        />
        <EuiHeader
          sections={[
            {
              items: [
                <EuiHeaderSectionItemButton
                  aria-label="menu navigation"
                  flush="both">
                  <EuiIcon type="menu" />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton
                  aria-label="menu navigation"
                  flush="both">
                  <EuiAvatar name="Elastic Space" size="s" type="space" />
                </EuiHeaderSectionItemButton>,
              ],
              breadcrumbs: [
                {
                  text: 'Cloud',
                  href: '#',
                },
                {
                  text: 'Deployments',
                  href: '#',
                },
                {
                  text: 'Create',
                },
              ],
            },
          ]}
        />
        <EuiPageTemplate restrictWidth={1200}>
          <EuiPageTemplate.Section color="transparent">
            <EuiTitle size="l">
              <h1>Welcome home</h1>
            </EuiTitle>

            <EuiSpacer size="l" />

            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiCard
                  description="Create search experiences with a refined set of APIs and tools."
                  image="/images/home--enterprise.png"
                  title="Enterprise Search"
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  description="Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs."
                  image="/images/home--observability.png"
                  title="Observability"
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  description="Prevent, collect, detect, and respond to threats for unified protection across your infrastructure."
                  image="/images/home--security.png"
                  title="Security"
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  description="Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications."
                  image="/images/home--analytics.png"
                  title="Analytics"
                />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiHorizontalRule margin="xxl" />

            <EuiFlexGroup alignItems="center" gutterSize="l">
              <EuiFlexItem>
                <EuiTitle size="s">
                  <h2>Get started by adding integrations</h2>
                </EuiTitle>
                <EuiSpacer size="l" />
                <EuiText size="m">
                  <p>
                    To start working with your data, use one of our many ingest
                    options. Collect data from an app or service, or upload a
                    file. If you&apos;re not ready to use your own data, add a
                    sample data set.
                  </p>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiFlexGroup justifyContent="flexStart" gutterSize="m">
                  <EuiFlexItem grow={false}>
                    <EuiButton
                      fill
                      onClick={() => router.push('/8.6/guided-setup')}>
                      Launch Guided Setup
                    </EuiButton>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButton iconType="plusInCircle">
                      Add Integrations
                    </EuiButton>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty iconType="documents">
                      Try sample data
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty iconType="importAction">
                      Upload a file
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiImage
                  size="xl"
                  src="/images/illustration--integrations.svg"
                  alt="packing box with integrations"
                />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiHorizontalRule margin="none" />
            <EuiSpacer size="xxl" />
            <EuiFlexGroup alignItems="flexEnd">
              <EuiFlexItem grow={1}>
                <EuiTitle size="s">
                  <h3>Management</h3>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="wrench" minWidth={100}>
                  Dev Tools
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty iconType="gear" fullWidth={false}>
                  Stack Management
                </EuiButtonEmpty>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="l" />

            <EuiFlexGroup alignItems="flexStart">
              <EuiFlexItem>
                <EuiCard>
                  <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        className="euiIcon euiIcon--large euiIcon--text euiCard__icon"
                        focusable="false"
                        role="img"
                        aria-hidden="true">
                        <path d="M14 32l-.36-.14A21.07 21.07 0 010 12.07V5.44L14 .06l14 5.38v6.63a21.07 21.07 0 01-13.64 19.78L14 32zM2 6.82v5.25a19.08 19.08 0 0012 17.77 19.08 19.08 0 0012-17.77V6.82L14 2.2 2 6.82z"></path>
                        <path
                          className="euiIcon__fillSecondary"
                          d="M9 17.83h2V23H9zM11 10.18V7H9v3.18a3 3 0 102 0zM10 14a1 1 0 110-2 1 1 0 010 2zM17 7h2v5.17h-2zM21 17a3 3 0 10-4 2.82V23h2v-3.18A3 3 0 0021 17zm-3 1a1 1 0 110-2 1 1 0 010 2z"></path>
                      </svg>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="xs">
                        <h3>Manage permissions</h3>
                      </EuiTitle>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiText
                    size="s"
                    textAlign="left"
                    style={{ marginLeft: '47px' }}>
                    <p>
                      Control who has access and what tasks they can perform.
                    </p>
                  </EuiText>
                </EuiCard>
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiCard>
                  <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        className="euiIcon euiIcon--large euiIcon--text euiCard__icon"
                        focusable="false"
                        role="img"
                        aria-hidden="true">
                        <path d="M1.81 15.19A8.94 8.94 0 0115.62 3.86l.38.42.38-.42a8.94 8.94 0 0114.26 10.68l-1.7-1.07a6.94 6.94 0 00-11.07-8.28L16 7.29l-1.87-2.1A6.94 6.94 0 003.41 14l-1.6 1.19zM16 31.18l-7.74-8.51 1.48-1.34L16 28.21l6.26-6.88 1.48 1.34z"></path>
                        <path
                          className="euiIcon__fillSecondary"
                          d="M16.16 23.29l-4.1-7.17L10.62 19H0v-2h9.38l2.56-5.12 3.9 6.83 4.13-10.32L23.66 17H32v2h-9.66l-2.31-5.39z"></path>
                      </svg>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="xs">
                        <h3>Monitor the stack</h3>
                      </EuiTitle>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiText
                    size="s"
                    textAlign="left"
                    style={{ marginLeft: '47px' }}>
                    <p style={{ marginBottom: 0 }}>
                      Track the real-time health and performance of your
                      deployment.
                    </p>
                  </EuiText>
                </EuiCard>
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiCard>
                  <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="euiIcon euiIcon--large euiIcon--text euiCard__icon"
                        focusable="false"
                        role="img"
                        aria-hidden="true">
                        <g fillRule="evenodd" transform="translate(0 2)">
                          <path
                            fillRule="nonzero"
                            d="M2 6a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H2zm13 2v3a1 1 0 01-1 1H2a1 1 0 01-1-1V8a1 1 0 011-1h12a1 1 0 011 1zm1-3V2a2 2 0 00-2-2H2a2 2 0 00-2 2v3c0 .601.271 1.133.69 1.5C.271 6.867 0 7.399 0 8v3a2 2 0 002 2h12a2 2 0 002-2V8c0-.601-.271-1.133-.689-1.5.418-.367.689-.899.689-1.5z"></path>
                          <circle cx="4.5" cy="9.5" r="1.5"></circle>
                          <circle cx="4.5" cy="3.5" r="1.5"></circle>
                          <path d="M12 8h1v3h-1zM10 8h1v3h-1zM12 2h1v3h-1zM10 2h1v3h-1z"></path>
                        </g>
                      </svg>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="xs">
                        <h3>Backup and restore</h3>
                      </EuiTitle>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiText
                    size="s"
                    textAlign="left"
                    style={{ marginLeft: '47px' }}>
                    <p style={{ marginBottom: 0 }}>
                      Save snapshots to backup repository, restore to recover
                      index and cluster state.
                    </p>
                  </EuiText>
                </EuiCard>
              </EuiFlexItem>

              <EuiFlexItem>
                <EuiCard>
                  <EuiFlexGroup>
                    <EuiFlexItem grow={false}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        className="euiIcon euiIcon--large euiIcon--text euiCard__icon"
                        focusable="false"
                        role="img"
                        aria-hidden="true">
                        <path d="M32 26v-2h-2.1a5 5 0 00-.73-1.75l1.49-1.49-1.41-1.41-1.49 1.49A5 5 0 0026 20.1V18h-2v2.1a5 5 0 00-1.75.73l-1.49-1.49-1.41 1.41 1.49 1.49A5 5 0 0020.1 24H18v2h2.1a5 5 0 00.73 1.75l-1.49 1.49 1.41 1.41 1.49-1.49a5 5 0 001.76.74V32h2v-2.1a5 5 0 001.75-.73l1.49 1.49 1.41-1.41-1.49-1.49A5 5 0 0029.9 26H32zm-7 2a3 3 0 110-6 3 3 0 010 6z"></path>
                        <path d="M25.71 24.29a1 1 0 00-1.09-.21 1.15 1.15 0 00-.33.21.93.93 0 00-.21.33 1 1 0 001.3 1.3 1.15 1.15 0 00.33-.21 1 1 0 00.21-1.09.94.94 0 00-.21-.33z"></path>
                        <path
                          className="euiIcon__fillSecondary"
                          d="M5 6h16v2H5zM5 12h16v2H5zM5 18h10v2H5zM5 24h8v2H5z"></path>
                        <path d="M16 32H3a3 3 0 01-3-3V3a3 3 0 013-3h20a3 3 0 013 3v13h-2V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h13v2z"></path>
                      </svg>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiTitle size="xs">
                        <h3>Manage index lifecycles</h3>
                      </EuiTitle>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                  <EuiText
                    size="s"
                    textAlign="left"
                    style={{ marginLeft: '47px' }}>
                    <p style={{ marginBottom: 0 }}>
                      Define lifecycle policies to automatically perform
                      operations as an index ages.
                    </p>
                  </EuiText>
                </EuiCard>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="xxl" />

            <EuiHorizontalRule />
            <EuiButtonEmpty iconType="home">
              Display a different page on log in
            </EuiButtonEmpty>
          </EuiPageTemplate.Section>
        </EuiPageTemplate>
      </>
    );
  } else {
    return true;
  }
};

export default KibanaHome;
