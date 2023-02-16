/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { useEuiTheme } from '@elastic/eui';
import CloudLayout from '../../../layouts/cloud';

const ProjectSettings = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();

  return (
    <CloudLayout
      hasSidebar
      breadcrumbs={[
        {
          text: 'Cloud',
          href: '/cloud',
        },
        {
          text: 'My deployment',
        },
      ]}></CloudLayout>
  );
};

export default ProjectSettings;
