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
  EuiTitle,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import CloudSubPageLayout from '../../../layouts/cloud/subpage';

const ProjectDetailPage = () => {
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
          isSelected: true,
          onClick: () => router.push('#'),
          forceOpen: true,
          items: [
            {
              name: 'Ingest & data',
              id: 'ingest-data',
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'injest-data',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
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
              isSelected: false,
              onClick: () =>
                router.push(
                  {
                    pathname: 'security',
                    query: {
                      projectTitle: PROJECT_TITLE,
                    },
                    shallow: true,
                  },
                  'security'
                ),
            },
          ],
        },
      ],
    },
  ];

  const PROJECT_INFO = [
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

  const PROJECT_ALIAS_TAGS = [
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

  const PROJECT_APPLICATIONS = [
    {
      title: 'Endpoints',
      content: 'Elasticsearch',
    },
    {
      content: 'Kibana',
    },
    {
      content: 'APM',
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
      <EuiSpacer size="s" />
      <EuiTitle size="s">
        <h3>Project Information</h3>
      </EuiTitle>
      <EuiSpacer size="l" />
      {PROJECT_INFO.map(detail => (
        <EuiFlexGroup key={detail.title}>
          <EuiFlexItem
            css={css`
              width: 250px;
              margin-bottom: 13px;
            `}
            grow={false}>
            <EuiText size="s">
              <h5>{detail.title}</h5>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText size="s">{detail.content}</EuiText>
          </EuiFlexItem>
          {detail.link && (
            <EuiFlexItem>
              <EuiSpacer size="xs" />
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      ))}

      <EuiSpacer size="xxl" />
      <EuiTitle size="s">
        <h3>Aliases and tags</h3>
      </EuiTitle>
      <EuiSpacer size="l" />
      {PROJECT_ALIAS_TAGS.map(detail => (
        <EuiFlexGroup key={detail.title}>
          <EuiFlexItem
            css={css`
              width: 250px;
              margin-bottom: 15px;
            `}
            grow={false}>
            <EuiText size="s">
              <h5>{detail.title}</h5>
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
              <EuiSpacer size="xs" />
              <EuiLink href="#">Edit</EuiLink>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      ))}

      <EuiSpacer size="xxl" />
      <EuiTitle size="s">
        <h3>Applications</h3>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText
        size="s"
        css={css`
          max-width: 640px;
        `}>
        <p>
          Helpful for connecting other applications to your project. You can set
          a custom endpoint alias for your project that it is reflected in each
          application endpoint.
        </p>
      </EuiText>
      <EuiSpacer size="l" />
      {PROJECT_APPLICATIONS.map(detail => (
        <EuiFlexGroup key={detail.content}>
          <EuiFlexItem
            css={css`
              width: 250px;
            `}
            grow={false}>
            <EuiText size="s">
              <h5>{detail.title}</h5>
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
            <h5>Cloud ID</h5>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
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
        <EuiFlexItem
          css={css`
            align-self: flex-end;
          `}>
          <EuiLink href="#">Copy Cloud ID</EuiLink>
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
            <h5>Version</h5>
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
