/** @jsxImportSource @emotion/react */
import { EuiSpacer } from '@elastic/eui';
import { useRouter } from 'next/router';
import CloudSubPageLayout from '../../layouts/cloud/sub_page';

const DetailPage = () => {
  const router = useRouter();
  return (
    <CloudSubPageLayout
      pageTitle={router.query.projectTitle}
      breadcrumbs={[
        {
          text: 'Cloud',
          href: 'cloud',
        },
        {
          text: 'Projects',
          href: 'projects',
        },
        {
          text: router.query.projectTitle,
        },
      ]}>
      <EuiSpacer size="xxl" />
    </CloudSubPageLayout>
  );
};

export default DetailPage;
