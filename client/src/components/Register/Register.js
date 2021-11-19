import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import { ReactComponent as Logo} from'./logo.svg'
import { ReactComponent as Baner} from'./baner.svg'

const MainDiv = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  `

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 #3700B3;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-top: 2.5rem;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const ButtonOption = styled.button`
  background: #BB86FC;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 35%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  margin: 1.5rem 0.5rem;

  &:focus {
    background: #3700B3;
  }
`
const BanerContainer = styled.div`
  margin-top: 1.5rem;
`

function Register() {
    return (
        <>
            <MainDiv>
                <MainContainer>
                    <BanerContainer>
                    <Baner />
                    </BanerContainer>
                
                    <InputContainer>
                        <Input type="text" placeholder="Nazwa użytkownika" />
                        <Input type="text" placeholder="Email" />
                        <Input type="password" placeholder="Hasło" />
                    </InputContainer>
                    <ButtonContainer>
                        <ButtonOption>Uczeń</ButtonOption>
                        <ButtonOption>Nauczyciel</ButtonOption>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button content="Zarejestruj się"></Button>
                    </ButtonContainer>
                    <LoginWith>masz już konto? zaloguj się</LoginWith>
                    <Logo width="5.5rem" height="5.5rem" />
                </MainContainer>
            </MainDiv>
        </>
    )
}

export default Register
