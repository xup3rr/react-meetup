import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useState, useEffect } from "react";
import { MeetupFavoriteAtom } from "../../store/MeetupFavoriteAtom";
import { useAtom } from "jotai";

export default function MainNavigation() {
  const [meetupFavorites] = useAtom(MeetupFavoriteAtom);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setVisible(scrollPosition > position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <header className={`${visible && classes.header}`}>
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
