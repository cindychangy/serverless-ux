/** @jsxImportSource @emotion/react */
import Header from '../../components/header';
import LoginPanel from '../../components/login_panel';

const LoginPage = () => {
  return (
    <>
      <Header accountType="login" logoLarge />
      <LoginPanel route="cloud" />
    </>
  );
};

export default LoginPage;
