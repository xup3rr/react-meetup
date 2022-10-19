import { useAtom } from "jotai";
import { MeetupFavoriteAtom } from "../store/MeetupFavoriteAtom";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const [meetups] = useAtom(MeetupFavoriteAtom);

  return (
    <section>
      <h1>Favorites Page</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}
