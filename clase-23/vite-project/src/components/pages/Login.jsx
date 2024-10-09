import LoginForm from "../auth/LoginForm";
import Page from "../layout/page";

function Login() {
  return (
    <Page gap={10}>
      <LoginForm />
    </Page>
  );
}

export default Login;
