import { StyledLoginPage } from './style';
import LoginForm from '../../components/Form/LoginForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const LoginPage = () => (
  <StyledLoginPage>
    <StyledContainer>
      <div className='flexGrid'>
        <div className='left'>
          <StyledGridBox className='formBox'>
            <StyledTitle tag='h2' $fontSize='three'>
              Login
            </StyledTitle>
            <LoginForm />
            <StyledParagraph textAlign='center' fontColor='gray'>
              Create your account to taste lots of delicacies and satisfy your
              hunger!
            </StyledParagraph>
            <StyledButtonLink
              to='/register'
              $buttonSize='default'
              $buttonStyle='gray'
            >
              Register
            </StyledButtonLink>
          </StyledGridBox>
        </div>
        <div className='right'>
          <IllustrationBox />
        </div>
      </div>
    </StyledContainer>
  </StyledLoginPage>
);

export default LoginPage;
