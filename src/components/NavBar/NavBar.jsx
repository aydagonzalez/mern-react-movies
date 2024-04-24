import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (

      <nav>
      <div className="nav-wrapper">
        {/* <a href="#" class="brand-logo">Logo</a> */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>      <strong>Welcome {user.username} </strong> &nbsp; | &nbsp;</li>
          <li>          <Link to="/">Movies List</Link> | </li>         
          <li>          <Link to="/actors">Actors</Link></li>
        </ul>
      </div>
    </nav>
          
  );
}
