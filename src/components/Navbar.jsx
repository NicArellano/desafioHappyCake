import { faAddressBook, faCakeCandles, faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="navContainer">

        <div className="subNav">
        <FontAwesomeIcon icon={faHouse} />
        <Link className="link" to="home">
        <p>Home</p>
        </Link>
        <FontAwesomeIcon icon={faAddressBook} />
        <Link className="link" to="contacto">
        <p>Contacto</p>
        </Link>
        
        </div>
        <div className="subNav">
        <h3>HAPPY CAKE</h3>
        <FontAwesomeIcon icon={faCakeCandles} size="2xs" />
        </div>
       
      </nav>
  )
}

export default Navbar