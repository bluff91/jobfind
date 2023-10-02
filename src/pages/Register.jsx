import { useState } from 'react'
import styled from 'styled-components'

const initialState = {
  user:"",
  password:"",
  email:"",
  isMember:true,
}
const Register = () => {
  const [registerValues, setRegisterValues] = useState(initialState)

  return <Wrapper>

  </Wrapper>
}

const Wrapper = styled.el`
what:2;
`

export default Register
