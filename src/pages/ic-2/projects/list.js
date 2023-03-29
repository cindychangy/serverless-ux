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
  EuiHorizontalRule,
} from '@elastic/eui';
import { css } from '@emotion/react';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';

const ProjectsPage = () => {
  const router = useRouter();

  const handleClick = route => {
    router.push(route);
  };

  const tableStyles = css`
    .euiTableHeaderCell:nth-child(4),
    .euiTableRowCell:nth-child(4) {
      .euiTableCellContent {
        justify-content: flex-end;
      }
    }
  `;

  const TABLE_HEADER = [
    'Project',
    'Type',
    'Cloud provider & region',
    'Actions',
  ];

  const TABLE_ITEMS = [
    {
      name: 'Access Logs POC',
      type: 'Observability',
      region: 'GCP - Iowa (us-central1)',
      actions: <EuiLink href="#">Manage</EuiLink>,
    },
    {
      name: 'Access Logs POC',
      type: 'Observability',
      region: 'GCP - Iowa (us-central1)',
      actions: <EuiLink href="#">Manage</EuiLink>,
    },
    {
      name: 'Access Logs POC',
      type: 'Observability',
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
          onClick: () => handleClick('/ic-2/deployments/list'),
        },
        {
          name: 'Projects',
          id: `nav_projects`,
          isSelected: true,
        },
      ]}
      pageTitle="Projects"
      breadcrumbs={[
        {
          text: 'Cloud',
          href: '/ic-2/cloud',
        },
        {
          text: 'Projects',
        },
      ]}>
      <EuiHorizontalRule />
      <EuiFlexGroup justifyContent="spaceBetween">
        <EuiFlexItem grow={true}>
          <EuiSearchBar box={{ placeholder: 'e.g: type:Observability ' }} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            fill
            iconType="plusInCircle"
            onClick={() => router.push('setup')}>
            Create project
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiTable css={tableStyles}>
        <EuiTableHeader key="header">
          {TABLE_HEADER.map((header, index) => (
            <EuiTableHeaderCell key={index}>{header}</EuiTableHeaderCell>
          ))}
        </EuiTableHeader>
        <EuiTableBody>
          {TABLE_ITEMS.map((item, index) => (
            <EuiTableRow key={item.name + index}>
              <Fragment>
                <EuiTableRowCell>
                  <EuiLink onClick={() => router.push('kibana')}>
                    {item.name}
                  </EuiLink>
                </EuiTableRowCell>
                <EuiTableRowCell>{item.type}</EuiTableRowCell>
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

export default ProjectsPage;
