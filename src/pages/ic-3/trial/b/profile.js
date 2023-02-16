/** @jsxImportSource @emotion/react */
import Header from '../../../../components/header';
import ProfilePanel from '../../../../components/profile_panel';

const ProfilePage = () => {
  return (
    <>
      <Header
        signedIn
        steps={[
          {
            title: 'About you',
            status: 'current',
          },
          {
            title: 'Choose setup',
            status: 'incomplete',
          },
        ]}
      />
      <ProfilePanel route="project-setup" />
    </>
  );
};

export default ProfilePage;
