/** @jsxImportSource @emotion/react */
import { EuiSpacer } from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';

const DetailPage = () => {
  const router = useRouter();
  const PROJECT_TITLE = router.query.projectTitle;
  return (
    <CloudSubPageLayout
      pageTitle={PROJECT_TITLE ? PROJECT_TITLE : 'My deployment'}
      breadcrumbs={[
        {
          text: 'Cloud',
          href: '/ic-2/cloud',
        },
        {
          text: 'Deployments',
          href: 'list',
        },
        {
          text: PROJECT_TITLE ? PROJECT_TITLE : 'My deployment',
        },
      ]}>
      <EuiSpacer size="xxl" />
    </CloudSubPageLayout>
  );
};

export default DetailPage;
