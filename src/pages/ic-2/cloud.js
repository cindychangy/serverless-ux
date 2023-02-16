/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiText,
  EuiLink,
  EuiSpacer,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTable,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableBody,
  useEuiTheme,
} from '@elastic/eui';
import CloudHomepageLayout from '../../layouts/cloud/homepage';

const CloudHomepage = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();

  const logoCircle = css`
    border-radius: 50%;
    height: 32px;
    width: 32px;
    box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
    background: ${euiTheme.colors.lightestShade};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const tableStyles = css`
    .euiTableHeaderCell:nth-child(4),
    .euiTableRowCell:nth-child(4) {
      .euiTableCellContent {
        justify-content: flex-end;
      }
    }

    .euiTableHeaderCell:nth-child(5),
    .euiTableRowCell:nth-child(5) {
      .euiTableCellContent {
        justify-content: flex-end;
      }
    }
  `;

  const TABLE_HEADER_DEPLOYMENTS = [
    'Deployment',
    'Status',
    'Version',
    'Cloud provider & region',
    'Actions',
  ];

  const TABLE_ITEMS_DEPLOYMENTS = [
    {
      name: 'Security xyz2064',
      status: <EuiBadge color="success">Healthy</EuiBadge>,
      version: '8.5.0',
      region: 'GCP - Iowa (us-central1)',
    },
  ];

  const TABLE_HEADER_PROJECTS = [
    'Project',
    'Type',
    'Cloud provider & region',
    'Actions',
  ];

  const TABLE_ITEMS_PROJECTS = [
    {
      name: 'Access Logs POC',
      type: 'Observability',
      provider: 'GCP - Iowa (us-central1)',
    },
    {
      name: 'Search_docs',
      type: 'Elasticsearch',
      provider: 'GCP - Iowa (us-central1)',
    },
  ];

  return (
    <CloudHomepageLayout route="project-setup">
      <EuiSpacer size="m" />
      <EuiPanel>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <div css={logoCircle}>
              <EuiIcon type="logoElasticsearch" size="m" />
            </div>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
              <EuiFlexItem>
                <EuiText>
                  <h4>Elasticsearch deployments</h4>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="">View all deployments</EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer sizer="1" />
        <EuiTable css={tableStyles}>
          <EuiTableHeader key="header">
            {TABLE_HEADER_DEPLOYMENTS.map(header => (
              <EuiTableHeaderCell key={header.name}>
                {header}
              </EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {TABLE_ITEMS_DEPLOYMENTS.map(item => (
              <EuiTableRow key="row">
                <Fragment key={item.name}>
                  <EuiTableRowCell>
                    <EuiLink onClick={() => router.push('/search')}>
                      {item.name}
                    </EuiLink>
                  </EuiTableRowCell>
                  <EuiTableRowCell>{item.status}</EuiTableRowCell>
                  <EuiTableRowCell>{item.version}</EuiTableRowCell>
                  <EuiTableRowCell>{item.region}</EuiTableRowCell>
                  <EuiTableRowCell>
                    <EuiLink href="">Manage</EuiLink>
                  </EuiTableRowCell>
                </Fragment>
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
        <EuiSpacer size="s" />
      </EuiPanel>
      <EuiSpacer size="l" />
      <EuiPanel>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <div css={logoCircle}>
              <EuiIcon type="logoElasticsearch" size="m" />
            </div>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
              <EuiFlexItem>
                <EuiText>
                  <h4>Elasticsearch projects</h4>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink href="">View all projects</EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer sizer="1" />
        <EuiTable css={tableStyles}>
          <EuiTableHeader>
            {TABLE_HEADER_PROJECTS.map(header => (
              <EuiTableHeaderCell key={header}>{header}</EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {TABLE_ITEMS_PROJECTS.map(item => (
              <EuiTableRow key={item.name}>
                <Fragment>
                  <EuiTableRowCell>
                    <EuiLink onClick={() => router.push('/search')}>
                      {item.name}
                    </EuiLink>
                  </EuiTableRowCell>
                  <EuiTableRowCell>{item.type}</EuiTableRowCell>
                  <EuiTableRowCell>{item.provider}</EuiTableRowCell>
                  <EuiTableRowCell>
                    <EuiLink href="">Manage</EuiLink>
                  </EuiTableRowCell>
                </Fragment>
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
        <EuiSpacer size="s" />
      </EuiPanel>
    </CloudHomepageLayout>
  );
};

export default CloudHomepage;
