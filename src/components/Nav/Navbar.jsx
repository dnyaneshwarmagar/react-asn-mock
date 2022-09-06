import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {

  return (
    <div className="nav-ul">
      <ul>
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/puppy">Puppy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
