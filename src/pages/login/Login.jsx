
import React from 'react'
import { LoginContainer, FormContainer, StyledImg,Header, StyledInput, StyledButton, StyledForm   } from './LoginStyles'
import meal from '../../assets/meal.svg';


const Login = () => {
  
 const user = {
  username: 'user' 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('user', JSON.stringify(user));
    window.location.href = "/home";
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} alt="logo" />
        <Header>{"<Clarusway/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required/>
          <StyledInput type="password" placeholder="Password" required/>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
       
      </FormContainer>
    </LoginContainer>
  )
}

export default Login