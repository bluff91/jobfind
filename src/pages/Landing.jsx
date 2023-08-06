import logo from '../assets/logo.svg'
import main from '../assets/main.svg'

const Landing = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" />
      </nav>
      <div
        className="landing-page-content"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div className="landing-page-left">
          <h1 className="landing-page-title">Job Find App</h1>
          <p className="landing-page-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eveniet maxime nihil amet asperiores! Fuga consequuntur provident
            excepturi. Modi quos totam tempore ullam vitae nam ipsum architecto.
            Ea, vitae autem illo quasi, dolorum, perspiciatis commodi tempore
            neque explicabo quos nesciunt.
          </p>
          <button className="landing-page-button btn">Login/Register</button>
        </div>
        <div className="landing-page-right">
          <img src={main} alt="main" />
        </div>
      </div>
    </div>
  )
}
export default Landing
