import main from '../assets/main.svg'
import styled from 'styled-components'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <StyleWrapper className="container">
      <nav className="navbar">
        <Logo />
      </nav>
      <div className="content">
        <div>
          <h1>
            Job <span>Find</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eveniet maxime nihil amet asperiores! Fuga consequuntur provident
            excepturi. Modi quos totam tempore ullam vitae nam ipsum architecto.
            Ea, vitae autem illo quasi, dolorum, perspiciatis commodi tempore
            neque explicabo quos nesciunt.
          </p>
          <Link to="/register" className="btn">
            Login/Register
          </Link>
        </div>
        <div>
          <img src={main} alt="main" />
        </div>
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
  .navbar {
    margin-top: 2rem;
  }
  span {
    color: var(--primary-500);
  }
  .content {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
    }
    p {
      color: var(--grey-600);
    }
  }

  @media (min-width: 992px) {
    .content {
      gap: 50px;

      img {
        display: block;
      }
    }
  }
`

export default Landing
