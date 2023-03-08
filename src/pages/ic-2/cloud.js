/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiLink,
  EuiSpacer,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiTable,
  EuiText,
  EuiTableHeader,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableBody,
  EuiButtonEmpty,
  useEuiBackgroundColor,
  useEuiTheme,
} from '@elastic/eui';
import CloudHomepageLayout from '../../layouts/cloud/homepage';
import WipBadge from '../../components/wip_badge';

const CloudHomepage = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();

  const logoCircle = css`
    border-radius: 50%;
    height: 32px;
    width: 32px;
    box-shadow: 0 3px 2px rgb(0 0 0 / 10%);
    background: ${useEuiBackgroundColor('subdued')};
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
    <CloudHomepageLayout route="setup" icNumber="2">
      <WipBadge />
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
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  href="#"
                  color="text"
                  css={css`
                    font-weight: ${euiTheme.font.weight.bold};
                    font-size: 16px;
                  `}
                  onClick={() => router.push('deployments/list')}>
                  Elasticsearch deployments
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink onClick={() => router.push('deployments/list')}>
                  View all deployments
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer sizer="1" />
        <EuiTable css={tableStyles}>
          <EuiTableHeader key="header">
            {TABLE_HEADER_DEPLOYMENTS.map((header, index) => (
              <EuiTableHeaderCell key={index}>{header}</EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {TABLE_ITEMS_DEPLOYMENTS.map((deployment, index) => (
              <EuiTableRow key={deployment + index}>
                <Fragment key={deployment.name}>
                  <EuiTableRowCell>
                    <EuiText
                      size="s"
                      css={css`
                        font-weight: ${euiTheme.font.weight.semiBold};
                      `}>
                      {deployment.name}
                    </EuiText>
                  </EuiTableRowCell>
                  <EuiTableRowCell>{deployment.status}</EuiTableRowCell>
                  <EuiTableRowCell>{deployment.version}</EuiTableRowCell>
                  <EuiTableRowCell>{deployment.region}</EuiTableRowCell>
                  <EuiTableRowCell>
                    <EuiButtonEmpty onClick={() => router.push('kibana')}>
                      Open
                    </EuiButtonEmpty>
                    <EuiButtonEmpty
                      flush="right"
                      onClick={() =>
                        router.push(
                          {
                            pathname: 'deployments/details',
                            query: {
                              projectTitle: deployment.name,
                            },
                          },
                          'deployments/details'
                        )
                      }>
                      Manage
                    </EuiButtonEmpty>
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
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  href="#"
                  color="text"
                  css={css`
                    font-weight: ${euiTheme.font.weight.bold};
                    font-size: 16px;
                  `}
                  onClick={() => router.push('projects/list')}>
                  Elasticsearch projects
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiLink onClick={() => router.push('projects/list')}>
                  View all projects
                </EuiLink>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer sizer="1" />
        <EuiTable css={tableStyles}>
          <EuiTableHeader>
            {TABLE_HEADER_PROJECTS.map((header, index) => (
              <EuiTableHeaderCell key={index}>{header}</EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {TABLE_ITEMS_PROJECTS.map((project, index) => (
              <EuiTableRow key={project + index}>
                <Fragment>
                  <EuiTableRowCell>
                    <EuiText
                      size="s"
                      css={css`
                        font-weight: ${euiTheme.font.weight.semiBold};
                      `}>
                      {project.name}
                    </EuiText>
                  </EuiTableRowCell>
                  <EuiTableRowCell>{project.type}</EuiTableRowCell>
                  <EuiTableRowCell>{project.provider}</EuiTableRowCell>
                  <EuiTableRowCell>
                    <EuiButtonEmpty onClick={() => router.push('kibana')}>
                      Open
                    </EuiButtonEmpty>
                    <EuiButtonEmpty
                      flush="right"
                      onClick={() =>
                        router.push(
                          {
                            pathname: 'projects/details',
                            query: {
                              projectTitle: project.name,
                            },
                          },
                          'projects/details'
                        )
                      }>
                      Manage
                    </EuiButtonEmpty>
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
