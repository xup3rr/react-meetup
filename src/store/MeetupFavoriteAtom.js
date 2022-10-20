import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const MeetupFavoriteAtom = atomWithStorage("meetupsFavorites", []);

const AddMeetupFavoriteAtom = atom(null, async (get, set, newMeetup) =>
  set(MeetupFavoriteAtom, [...get(MeetupFavoriteAtom), newMeetup])
);

const RemoveMeetupFavoriteAtom = atom(null, async (get, set, meetup) => {
  const updatedMeetupFavorites = get(MeetupFavoriteAtom).filter(function (m) {
    return m.id !== meetup.id;
  });
  set(MeetupFavoriteAtom, updatedMeetupFavorites);
});

export { MeetupFavoriteAtom, AddMeetupFavoriteAtom, RemoveMeetupFavoriteAtom };
