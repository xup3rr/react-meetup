import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import { useFetch } from "../../util-hooks/useFetch";

export default function MeetupList() {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data.map((e) => {
          return (
            <li key={e.id}>
              <MeetupItem item={e} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
