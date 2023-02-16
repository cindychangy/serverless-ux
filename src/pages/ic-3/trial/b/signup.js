/** @jsxImportSource @emotion/react */
import Header from '../../../../components/header';
import SignupPanel from '../../../../components/signup_panel';

const SignupPage = () => {
  return (
    <>
      <Header logoLarge />
      <SignupPanel route="profile" />
    </>
  );
};

export default SignupPage;
