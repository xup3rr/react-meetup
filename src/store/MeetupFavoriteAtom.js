import { atom } from "jotai";

const MeetupFavoriteAtom = atom([]);

const AddMeetupFavoriteAtom = atom(
  (get) => get(MeetupFavoriteAtom),
  async (get, set, newMeetup) =>
    set(MeetupFavoriteAtom, [...get(MeetupFavoriteAtom), newMeetup])
);

const RemoveMeetupFavoriteAtom = atom(null, async (get, set, meetup) => {
  const updatedMeetupFavorites = get(MeetupFavoriteAtom).filter(function (m) {
    return m.id !== meetup.id;
  });
  set(MeetupFavoriteAtom, updatedMeetupFavorites);
});

export { MeetupFavoriteAtom, AddMeetupFavoriteAtom, RemoveMeetupFavoriteAtom };
