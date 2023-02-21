/** @jsxImportSource @emotion/react */
import { EuiSpacer } from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../../layouts/cloud/sub_page';

const DetailPage = () => {
  const router = useRouter();
  return (
    <CloudSubPageLayout
      pageTitle={
        router.query.projectTitle ? router.query.projectTitle : 'My deployment'
      }
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
          text: router.query.projectTitle
            ? router.query.projectTitle
            : 'My deployment',
        },
      ]}>
      <EuiSpacer size="xxl" />
    </CloudSubPageLayout>
  );
};

export default DetailPage;
