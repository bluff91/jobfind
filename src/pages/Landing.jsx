import logo from '../assets/logo.svg'
import main from '../assets/main.svg'

const Landing = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="2">
        <div className="2">
          <h1 className="2">Job Find App</h1>
          <p className="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eveniet maxime nihil amet asperiores! Fuga consequuntur provident
            excepturi. Modi quos totam tempore ullam vitae nam ipsum architecto.
            Ea, vitae autem illo quasi, dolorum, perspiciatis commodi tempore
            neque explicabo quos nesciunt.
          </p>
          <button className="2">Login/Register</button>
        </div>
        <div className={2}>
          <img src={main} alt="main" />
        </div>
      </div>
    </div>
  )
}
export default Landing
