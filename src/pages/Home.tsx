import HeroImage from '../assets/hero-image.jpg'
import '../styles/home.css'
import { NavLink } from "react-router-dom";

const Home = () =>{
  return(
    <div className="homepage">
      <div className="hero-desc">
        <h1>RifeCart</h1>
        <p>Your One-Stop shop for Fashion, Jewelry, and Tech.</p>
        <NavLink to="/products">Browse</NavLink>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  )
}

export default Home;