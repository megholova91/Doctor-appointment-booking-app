import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerContainer">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Book Appointment
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
