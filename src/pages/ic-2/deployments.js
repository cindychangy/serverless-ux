/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import {
  EuiSpacer,
  EuiSearchBar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiTable,
  EuiTableHeader,
  EuiTableRowCell,
  EuiTableBody,
  EuiTableHeaderCell,
  EuiTableRow,
  EuiLink,
  EuiBadge,
} from '@elastic/eui';
import { css } from '@emotion/react';
import CloudSubPageLayout from '../../layouts/cloud/sub_page';

const tableStyles = css`
  .euiTableHeaderCell:nth-child(5),
  .euiTableRowCell:nth-child(5) {
    .euiTableCellContent {
      justify-content: flex-end;
    }
  }
`;

const TABLE_HEADER = [
  'Deployment',
  'Status',
  'Version',
  'Cloud provider & region',
  'Actions',
];

const TABLE_ITEMS = [
  {
    name: 'Security xyz2064',
    status: <EuiBadge color="success">Healthy</EuiBadge>,
    version: '8.5.0',
    region: 'GCP - Iowa (us-central1)',
    actions: <EuiLink href="#">Manage</EuiLink>,
  },
];

const DeploymentsPage = () => {
  const router = useRouter();

  const handleClick = route => {
    router.push(route);
  };

  const SIDENAV_ITEMS = [
    {
      name: 'Deployments',
      id: `nav_deployments`,
      isSelected: true,
      onClick: handleClick,
    },
    {
      name: 'Projects',
      id: `nav_projects`,
      onClick: () => handleClick('projects'),
    },
  ];

  return (
    <CloudSubPageLayout
      navItems={SIDENAV_ITEMS}
      pageTitle="Deployments"
      breadcrumbs={[
        {
          text: 'Cloud',
          href: 'cloud',
        },
        {
          text: 'Projects',
        },
      ]}>
      <EuiSpacer size="l" />
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={true}>
          <EuiSearchBar
            box={{ placeholder: 'e.g: healthy:y us-east tag:(apm:on)' }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            fill
            iconType="plusInCircle"
            onClick={() => router.push('create-deployment')}>
            Create deployment
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiTable css={tableStyles}>
        <EuiTableHeader key="header">
          {TABLE_HEADER.map(header => (
            <EuiTableHeaderCell key={header.name}>{header}</EuiTableHeaderCell>
          ))}
        </EuiTableHeader>
        <EuiTableBody>
          {TABLE_ITEMS.map(item => (
            <EuiTableRow key="row">
              <Fragment key={item.name}>
                <EuiTableRowCell>
                  <EuiLink onClick={() => router.push('kibana')}>
                    {item.name}
                  </EuiLink>
                </EuiTableRowCell>
                <EuiTableRowCell>{item.status}</EuiTableRowCell>
                <EuiTableRowCell>{item.version}</EuiTableRowCell>
                <EuiTableRowCell>{item.region}</EuiTableRowCell>
                <EuiTableRowCell>
                  <EuiLink
                    onClick={() =>
                      router.push(
                        {
                          pathname: 'details',
                          query: {
                            projectTitle: item.name,
                          },
                        },
                        'deployment-details'
                      )
                    }>
                    {item.actions}
                  </EuiLink>
                </EuiTableRowCell>
              </Fragment>
            </EuiTableRow>
          ))}
        </EuiTableBody>
      </EuiTable>
    </CloudSubPageLayout>
  );
};

export default DeploymentsPage;
