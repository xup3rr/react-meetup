import { useEffect } from "react";
import { useAtom } from "jotai";
import { MeetupsAtom, FetchMeetupsAtom } from "../store/MeetupAtom";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [meetups] = useAtom(MeetupsAtom);
  const [, fetchMeetups] = useAtom(FetchMeetupsAtom);

  useEffect(() => {
    if (!meetups) {
      fetchMeetups("/data.json");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}
