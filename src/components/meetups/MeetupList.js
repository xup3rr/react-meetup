import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({ meetups }) {
  if (!meetups) return <p>Loading...</p>;
  if (meetups.length === 0) return <p>No Meetups found</p>;
  return (
    <>
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
