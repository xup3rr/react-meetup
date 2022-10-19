import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { FetchMeetupsAtom } from "../../store/MeetupAtom";

export default function MeetupList() {
  const [meetups, fetchMeetups] = useAtom(FetchMeetupsAtom);

  useEffect(() => {
    if (!meetups) {
      fetchMeetups("/data.json");
    }
  }, []);

  if (!meetups) return <p>Loading...</p>;

  if (meetups.length === 0) return <p>No Meetups found</p>;

  return (
    <>
      <h1>All Meetups</h1>
      {meetups.length > 0 && (
        <ul className={classes.list}>
          {meetups.map((e) => {
            return (
              <li key={e.id}>
                <MeetupItem item={e} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
