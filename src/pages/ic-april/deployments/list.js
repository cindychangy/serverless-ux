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
  EuiHorizontalRule,
} from '@elastic/eui';
import { css } from '@emotion/react';
import CloudSubPageLayout from '../../../layouts/cloud/subpage';

const DeploymentsPage = () => {
  const router = useRouter();

  const handleClick = route => {
    router.push(route);
  };

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

  return (
    <CloudSubPageLayout
      navItems={[
        {
          name: 'Deployments',
          id: `nav_deployments`,
          isSelected: true,
          onClick: handleClick,
        },
        {
          name: 'Projects',
          id: `nav_projects`,
          onClick: () => handleClick('/ic-april/projects/list'),
        },
      ]}
      pageTitle="Deployments"
      breadcrumbs={[
        {
          text: 'Cloud',
          href: '/ic-april/cloud',
        },
        {
          text: 'Deployments',
        },
      ]}>
      <EuiHorizontalRule />
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={true}>
          <EuiSearchBar
            box={{ placeholder: 'e.g: healthy:y us-east tag:(apm:on)' }}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton fill onClick={() => router.push('create-deployment')}>
            Create deployment
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiTable css={tableStyles}>
        <EuiTableHeader key="header">
          {TABLE_HEADER.map((header, index) => (
            <EuiTableHeaderCell key={header + index}>
              {header}
            </EuiTableHeaderCell>
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
                        'details'
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
