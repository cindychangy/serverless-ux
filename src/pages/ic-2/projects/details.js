/** @jsxImportSource @emotion/react */
import {
  EuiSpacer,
  EuiButton,
  EuiButtonEmpty,
  EuiHorizontalRule,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiCode,
  EuiBadge,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';
import { css } from '@emotion/react';

const ProjectDetailPage = () => {
  const router = useRouter();
  const PROJECT_TITLE = router.query.projectTitle;

  const BREADCRUMBS = [
    {
      text: 'Cloud',
      href: '/ic-2/cloud',
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
      onClick: () => router.push('/ic-2/deployments/list'),
    },
    {
      name: 'Projects',
      id: 'projects',
      isSelected: false,
      onClick: () => router.push('/ic-2/projects/list'),
      items: [
        {
          name: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
          id: 'access-logs',
          isSelected: true,
          onClick: () => router.push('#'),
          forceOpen: true,
          items: [
            {
              name: 'Ingest data',
              id: 'ingest-data',
              isSelected: false,
              onClick: () => router.push('#'),
            },
            {
              name: 'Performance',
              id: 'performance',
              isSelected: false,
              onClick: () => router.push('#'),
            },
            {
              name: 'Security',
              id: 'security',
              isSelected: false,
              onClick: () => router.push('#'),
            },
          ],
        },
      ],
    },
  ];

  const PROJECT_DETAILS = [
    {
      title: 'Project name',
      content: PROJECT_TITLE ? PROJECT_TITLE : 'My project',
      link: true,
    },
    {
      title: 'Project type',
      content: 'Observability',
    },
    {
      title: 'Cloud provider / region',
      content: 'GCP / Iowa',
    },
  ];

  const PROJECT_SETTINGS = [
    {
      title: 'Custom endpoints alias',
      content: 'observability-cluster-ax2313a',
      link: 'Edit',
    },
    {
      title: 'Tags',
      content: 'env:prod, team:observability',
      link: 'Edit',
    },
  ];

  const PROJECT_ENDPOINTS = [
    {
      title: 'Endpoints',
      content: 'Elasticsearch',
    },
    {
      content: 'Kibana',
    },
    {
      content: 'Elasticsearch',
    },
  ];

  return (
    <CloudSubPageLayout
      pageTitle={PROJECT_TITLE ? PROJECT_TITLE : 'My project'}
      breadcrumbs={BREADCRUMBS}
      navItems={SIDE_NAV}
      headerActions={[
        <EuiButtonEmpty color="danger">Delete project</EuiButtonEmpty>,
        <EuiButton fill>Open project</EuiButton>,
      ]}>
      <EuiHorizontalRule />
      <EuiSpacer size="xxl" />
      {PROJECT_DETAILS.map(detail => (
        <EuiFlexGroup key={detail.title}>
          <EuiFlexItem
            css={css`
              width: 250px;
              margin-bottom: 20px;
            `}
            grow={false}>
            <EuiText size="s">
              <strong>{detail.title}</strong>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem
            css={css`
              width: 100px;
            `}
            grow={false}>
            <EuiText size="s">{detail.content}</EuiText>
          </EuiFlexItem>
          {detail.link && (
            <EuiFlexItem>
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      ))}

      <EuiSpacer size="xxl" />
      {PROJECT_SETTINGS.map(detail => (
        <EuiFlexGroup key={detail.title}>
          <EuiFlexItem
            css={css`
              width: 250px;
              margin-bottom: 15px;
            `}
            grow={false}>
            <EuiText size="s">
              <strong>{detail.title}</strong>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem
            css={css`
              width: 200px;
            `}
            grow={false}>
            <EuiText size="s">{detail.content}</EuiText>
          </EuiFlexItem>
          {detail.link && (
            <EuiFlexItem>
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      ))}

      <EuiSpacer size="xxl" />
      {PROJECT_ENDPOINTS.map(detail => (
        <EuiFlexGroup key={detail.content}>
          <EuiFlexItem
            css={css`
              width: 250px;
            `}
            grow={false}>
            <EuiText size="s">
              <strong>{detail.title}</strong>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem
            css={css`
              width: 100px;
              margin-bottom: 15px;
            `}
            grow={false}>
            <EuiText size="s">{detail.content}</EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiLink href="#">Copy endpoint</EuiLink>
          </EuiFlexItem>
        </EuiFlexGroup>
      ))}

      <EuiSpacer size="xxl" />
      <EuiFlexGroup>
        <EuiFlexItem
          grow={false}
          css={css`
            width: 250px;
          `}>
          <EuiText size="s">
            <strong>Cloud ID</strong>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCode
            css={css`
              width: 295px;
              line-height: 1.3;
              padding: 10px;
            `}>
            test:dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyQ
            <br />
            yZjNkMmVhOGViZmI0Y2NmOGE5Y2EzZTEyZTJ
            <br />
            mMTAxMCQyNjliZTFmY2E1MTI0ZjJmODRiMjN
            <br />
            jNTRmZmEzMjkyOQ==
          </EuiCode>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="xxl" />
      <EuiFlexGroup>
        <EuiFlexItem
          css={css`
            width: 250px;
          `}
          grow={false}>
          <EuiText size="s">
            <strong>Version</strong>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiBadge color="hollow">12.9.4</EuiBadge>
        </EuiFlexItem>
      </EuiFlexGroup>
    </CloudSubPageLayout>
  );
};

export default ProjectDetailPage;
