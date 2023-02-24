/** @jsxImportSource @emotion/react */
import Header from '../../../components/header';
import ProfilePanel from '../../../components/profile_panel';

const Profile = () => {
  return (
    <>
      <Header
        signedIn
        icNumber="#"
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
      <ProfilePanel route="setup" />
    </>
  );
};

export default Profile;
