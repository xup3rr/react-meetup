import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { MeetupFavoriteAtom } from "../../store/MeetupFavoriteAtom";
import { useAtom } from "jotai";

export default function MainNavigation() {
  const [meetupFavorites] = useAtom(MeetupFavoriteAtom);

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
            <span className={classes.badge}>{meetupFavorites.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
