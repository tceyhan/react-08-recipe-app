
import React from 'react'
import { FoodInput, FormContainer, Button, Select } from './HeaderStyles'

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {
  return (
    <div>
      <FormContainer>
       <FoodInput
       type="text"
       placeholder="Search for food"
       onChange={(e) => setQuery(e.target.value)}
       />

       <Button type="submit">Search</Button>

       <Select
        name ="mealTypes"
        id='mealTypes'
        onChange={(e) => setMeal(e.target.value)}>

        {mealTypes.map((item, index) => {
          return <option key={index} value={item.toLowerCase()}>{item}</option>
        })}

        </Select>   
      </FormContainer>
    </div>
  )
}

export default Form