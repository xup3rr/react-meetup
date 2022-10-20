import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  MeetupFavoriteAtom,
  AddMeetupFavoriteAtom,
  RemoveMeetupFavoriteAtom,
} from "../../store/MeetupFavoriteAtom";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ item }) {
  const [meetupFavorites] = useAtom(MeetupFavoriteAtom);
  const [, addMeetupFavorite] = useAtom(AddMeetupFavoriteAtom);
  const [, removeMeetupFavorite] = useAtom(RemoveMeetupFavoriteAtom);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(meetupFavorites.some((e) => e.id === item.id));
  }, [meetupFavorites, item]);

  const Button = (favorite) => {
    if (favorite) {
      return (
        <button onClick={() => removeMeetupFavorite(item)}>
          Remove from favorites
        </button>
      );
    }
    return (
      <button onClick={() => addMeetupFavorite(item)}>Add to favorites</button>
    );
  };

  return (
    <Card>
      <div className={classes.image}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={classes.content}>
        <h3>{item.title}</h3>
        <address>{item.address}</address>
        <p>{item.description}</p>
      </div>
      <div className={classes.actions}>{Button(isFavorite)}</div>
    </Card>
  );
}
