import { useState } from 'react'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const initialState = {
  user: '',
  password: '',
  email: '',
  isMember: true,
}
const Register = () => {
  const [registerValues, setRegisterValues] = useState(initialState)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  console.log(registerValues)

  function handleChange(e) {
    console.log(e.target.value)
    setRegisterValues(
      registerValues.map((item) => {
        if (item === e.target.name) {
          return { ...registerValues }
        } else {
          return { ...registerValues }
        }
      })
    )
  }

  return (
    <StyleWrapper>
      <form className="form">
        <div className="form-container">
          <div className="title">
            <Logo />
            <h3 className="">Login</h3>
          </div>
          <label className="form-label">Email</label>
          <input
            className="form-input"
            name="email"
            type="text"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-label">Password</label>
          <input
            className="form-input"
            name="password"
            type="text"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <button type="button" className="btn">
            Submit
          </button>
          <p>
            Not a member yet ? <Link to="/">Register</Link>
          </p>
        </div>
      </form>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.section`
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    button {
      margin-top: 1rem;
    }
    p {
      text-align: center;
    }
  }
`

export default Register
