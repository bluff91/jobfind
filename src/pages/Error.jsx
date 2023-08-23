import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img from '../assets/imgs/error.jpg'

const Error = () => {
  return (
    <Wrapper>
      <img src={img} />
      <h3>Ohh! Page not found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/landing">Back Home</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: auto;
  background-color: var(--grey-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 1000px;
  }
  h3 {
    margin: 0;
    margin-top: 2rem;
  }
  p {
    margin: 1rem 0;
  }
`
export default Error
