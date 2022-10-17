import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new">Add New Meetup</Link>
          </li>

          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={classes.badge}>{0}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
