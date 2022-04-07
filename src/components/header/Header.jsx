
import React from 'react'
import { HeaderContainer, MainHeader } from './HeaderStyles';
import Form from './Form';


const Header = ({ setQuery, getData, mealTypes, setMeal }) => {
  return (
    <div>
      <HeaderContainer>

      <MainHeader>Food App</MainHeader>

      <Form
      setQuery ={setQuery}
      getData ={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      />

      </HeaderContainer>
    </div>
  )
}

export default Header