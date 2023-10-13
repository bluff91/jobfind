import { useState } from 'react'
import styled from 'styled-components'
import { Logo, FormRow } from '../components'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'

const initialState = {
  name: '',
  password: '',
  email: '',
  isMember: true,
}
const Register = () => {
  const [registerValues, setRegisterValues] = useState(initialState)
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegisterValues({ ...registerValues, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = registerValues
    if (!password || !email || (!isMember && !name)) {
      toast.error('please complete all input fields !')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  const toggleMember = () => {
    setRegisterValues({ ...registerValues, isMember: !registerValues.isMember })
  }

  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  // console.log(registerValues)

  // function handleChange(e) {
  //   console.log(e.target.value)
  //   setRegisterValues(
  //     registerValues.map((item) => {
  //       if (item === e.target.name) {
  //         return { ...registerValues }
  //       } else {
  //         return { ...registerValues }
  //       }
  //     })
  //   )
  // }
  // ({ type, name, value, handleChange, labelText })

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{registerValues.isMember ? `Login` : `Register`}</h3>
        {!registerValues.isMember && (
          <FormRow
            name="name"
            type="text"
            value={registerValues.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name="email"
          type="email"
          value={registerValues.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={registerValues.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {registerValues.isMember ? `Not a member yet?` : `Already a member?`}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {registerValues.isMember ? `Register` : `Login`}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`

export default Register
