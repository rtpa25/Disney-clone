import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/login-background.jpg");
`;

const Content = styled.div`
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 4rem;
  height: 100%;
`;

const CTA = styled.div`
  max-width: 65rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CTALogoOne = styled.img`
  margin: 8rem 0 1.2rem 0;
  min-height: 5rem;
  max-width: 60rem;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 1.2rem;
  width: 100%;
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  padding: 1.65rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0 0 2.4rem;
  line-height: 1.5;
  letter-spacing: 0.15rem;
`;

const CTALogoTwo = styled.img`
  max-width: 60rem;
  width: 100%;
  margin-bottom: 2rem;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
