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
} from '@elastic/eui';
import { css } from '@emotion/react';
import CloudSubPageLayout from '../../layouts/cloud/sub_page';

const tableStyles = css`
  .euiTableHeaderCell:nth-child(4),
  .euiTableRowCell:nth-child(4) {
    .euiTableCellContent {
      justify-content: flex-end;
    }
  }
`;

const TABLE_HEADER = ['Project', 'Type', 'Cloud provider & region', 'Actions'];

const TABLE_ITEMS = [
  {
    name: 'Access Logs POC',
    type: 'Observability',
    region: 'GCP - Iowa (us-central1)',
    actions: <EuiLink href="">Manage</EuiLink>,
  },
  {
    name: 'Access Logs POC',
    type: 'Observability',
    region: 'GCP - Iowa (us-central1)',
    actions: <EuiLink href="">Manage</EuiLink>,
  },
  {
    name: 'Access Logs POC',
    type: 'Observability',
    region: 'GCP - Iowa (us-central1)',
    actions: <EuiLink href="">Manage</EuiLink>,
  },
];

const ProjectsPage = () => {
  const router = useRouter();

  const handleClick = route => {
    router.push(route);
  };

  const SIDENAV_ITEMS = [
    {
      name: 'Deployments',
      id: `nav_deployments`,
      onClick: () => handleClick('deployments'),
    },
    {
      name: 'Projects',
      id: `nav_projects`,
      isSelected: true,
    },
  ];

  return (
    <CloudSubPageLayout
      navItems={SIDENAV_ITEMS}
      pageTitle="Projects"
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
          <EuiSearchBar box={{ placeholder: 'e.g: type:Observability ' }} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton
            fill
            iconType="plusInCircle"
            onClick={() => router.push('project-setup-min')}>
            Create project
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
                  <EuiLink onClick={() => router.push('')}>{item.name}</EuiLink>
                </EuiTableRowCell>
                <EuiTableRowCell>{item.type}</EuiTableRowCell>
                <EuiTableRowCell>{item.region}</EuiTableRowCell>
                <EuiTableRowCell>{item.actions}</EuiTableRowCell>
              </Fragment>
            </EuiTableRow>
          ))}
        </EuiTableBody>
      </EuiTable>
    </CloudSubPageLayout>
  );
};

export default ProjectsPage;
