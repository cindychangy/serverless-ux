/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiText,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
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
import CloudLayout from '../../layouts/cloud';

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
    .euiTableHeaderCell:nth-child(5),
    .euiTableRowCell:nth-child(5) {
      .euiTableCellContent {
        justify-content: flex-end;
      }
    }
  `;

  const TABLE_HEADER = [
    'Deployment Name',
    'Status',
    'Version',
    'Cloud Region',
    'Manage Deployment',
  ];

  const TABLE_ITEMS = [
    {
      name: 'My deployment',
      status: <EuiBadge color="success">Healthy</EuiBadge>,
      version: '8.5.1',
      region: 'GCP - Iowa (us-central1)',
    },
  ];

  return (
    <CloudLayout
      isCloudHome
      breadcrumbs={[
        {
          text: 'Cloud',
        },
      ]}>
      <EuiFlexGroup gutterSize="l">
        <EuiFlexItem grow={2}>
          <EuiPanel>
            <EuiFlexGroup gutterSize="s" alignItems="center">
              <EuiFlexItem grow={false}>
                <div css={logoCircle}>
                  <EuiIcon type="logoElasticsearch" size="m" />
                </div>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText>
                  <h4>Elasticsearch Service</h4>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem
                grow={false}
                css={css`
                  text-align: right;
                `}>
                <EuiButton fill iconType="plus">
                  Create a project
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer sizer="1" />
            <EuiTable css={tableStyles}>
              <EuiTableHeader>
                {TABLE_HEADER.map(header => (
                  <EuiTableHeaderCell key={header.name}>
                    {header}
                  </EuiTableHeaderCell>
                ))}
              </EuiTableHeader>
              <EuiTableBody>
                <EuiTableRow>
                  {TABLE_ITEMS.map(item => (
                    <>
                      <EuiTableRowCell>
                        <EuiButtonEmpty
                          flush="left"
                          onClick={() => router.push('/search')}>
                          {item.name}
                        </EuiButtonEmpty>
                      </EuiTableRowCell>
                      <EuiTableRowCell>{item.status}</EuiTableRowCell>
                      <EuiTableRowCell>{item.version}</EuiTableRowCell>
                      <EuiTableRowCell>{item.region}</EuiTableRowCell>
                      <EuiTableRowCell>
                        <EuiButtonIcon
                          iconType="gear"
                          onClick={() => router.push('cloud/project')}
                        />
                      </EuiTableRowCell>
                    </>
                  ))}
                </EuiTableRow>
              </EuiTableBody>
            </EuiTable>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiPanel>Cloud panel</EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </CloudLayout>
  );
};

export default CloudHomepage;
