/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import {
  EuiSpacer,
  EuiButton,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiTableBody,
  EuiTable,
  EuiTableHeader,
  EuiTableRow,
  EuiTableRowCell,
  EuiTableHeaderCell,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';
import { css } from '@emotion/react';

const SecurityPage = () => {
  const router = useRouter();
  const PROJECT_TITLE = router.query.projectTitle;

  const BREADCRUMBS = [
    {
      text: 'Cloud',
      href: '/ic-april/cloud',
    },
    {
      text: 'Projects',
      href: 'list',
    },
    {
      text: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
    },
  ];

  const SIDE_NAV = [
    {
      name: 'Deployments',
      id: 'deployments',
      isSelected: false,
      onClick: () => router.push('/ic-april/deployments/list'),
    },
    {
      name: 'Projects',
      id: 'projects',
      isSelected: false,
      onClick: () => router.push('/ic-april/projects/list'),
      items: [
        {
          name: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
          id: 'my-project',
          isSelected: false,
          onClick: () =>
            router.push(
              {
                pathname: 'details',
                query: {
                  projectTitle: PROJECT_TITLE,
                },
                shallow: true,
              },
              'details'
            ),
          forceOpen: true,
          items: [
            {
              name: 'Ingest data',
              id: 'ingest-data',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'ingest-data',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'injest-data'
                ),
            },
            {
              name: 'Performance',
              id: 'performance',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'performance',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'performance'
                ),
            },
            {
              name: 'Security',
              id: 'security',
              isSelected: true,
            },
          ],
        },
      ],
    },
  ];

  const TABLE_HEADER = [
    'Key',
    'Resources',
    'Creator',
    'Created',
    'Expires',
    'Actions',
  ];

  const TABLE_ITEMS = [
    {
      key: 'default-search',
      resource: 'Search endpoint',
      creator: 'system',
      created: 'Jan 01, 2022',
      expires: 'Dec 17, 2029',
      action: 'Revoke',
    },
    {
      key: 'default-injest',
      resource: 'Injest endpoint',
      creator: 'system',
      created: 'Jan 01, 2022',
      expires: 'Dec 17, 2029',
      action: 'Revoke',
    },
    {
      key: 'default-engineer',
      resource: 'Injest endpoint',
      creator: 'Project admin',
      created: 'Jan 01, 2022',
      expires: 'Dec 17, 2023',
      action: 'Revoke',
    },
  ];

  return (
    <CloudSubPageLayout
      pageTitle="Security"
      breadcrumbs={BREADCRUMBS}
      navItems={SIDE_NAV}>
      <EuiHorizontalRule />

      <EuiTitle size="s">
        <h4>Access rights to resources</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <p>Manage access rights to your project’s resources</p>
      </EuiText>

      <EuiSpacer size="xl" />
      <EuiTitle size="xxs">
        <h5>Users</h5>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText size="s">
        <EuiText>
          <p>
            Go to <a href="#">Users & Roles</a> to manage what resources users
            can read and write in this project
          </p>
        </EuiText>
      </EuiText>
      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />
      <div
        css={css`
          max-width: 1000px;
        `}>
        <EuiFlexGroup justifyContent="spaceBetween">
          <EuiFlexItem>
            <EuiTitle size="xxs">
              <h5>Project API Keys</h5>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={0}>
            <EuiButton fill onClick={() => {}} fullWidth="false">
              Create key
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="xl" />
        <EuiTable>
          <EuiTableHeader key="header">
            {TABLE_HEADER.map((header, index) => (
              <EuiTableHeaderCell key={index}>{header}</EuiTableHeaderCell>
            ))}
          </EuiTableHeader>
          <EuiTableBody>
            {TABLE_ITEMS.map((item, index) => (
              <EuiTableRow key={item.key + index}>
                <Fragment>
                  <EuiTableRowCell>{item.key}</EuiTableRowCell>
                  <EuiTableRowCell>{item.resource}</EuiTableRowCell>
                  <EuiTableRowCell>{item.creator}</EuiTableRowCell>
                  <EuiTableRowCell>{item.created}</EuiTableRowCell>
                  <EuiTableRowCell>{item.expires}</EuiTableRowCell>
                  <EuiTableRowCell>{item.action}</EuiTableRowCell>
                </Fragment>
              </EuiTableRow>
            ))}
          </EuiTableBody>
        </EuiTable>
      </div>
    </CloudSubPageLayout>
  );
};

export default SecurityPage;
