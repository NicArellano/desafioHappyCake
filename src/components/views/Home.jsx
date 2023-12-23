import { faCakeCandles } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Home = () => {
  return (
    <div className="view">
        <h1>Bienvenido a Happy Cake</h1>
        <span>El lugar de los pasteles felices</span>
        <FontAwesomeIcon icon={faCakeCandles} size="2xl" />
        
    </div>
    
  )
}

export default Home