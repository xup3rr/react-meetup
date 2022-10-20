import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const MeetupsAtom = atomWithStorage("meetups", null);

const FetchMeetupsAtom = atom(null, async (_, set, url) => {
  const response = await fetch(url);
  const json = await response.json();
  set(MeetupsAtom, json);
});

const NewMeetupAtom = atom(null, async (get, set, newMeetup) => {
  const meetups = get(MeetupsAtom);
  newMeetup.id = `m${meetups.length + 1}`;
  set(MeetupsAtom, [...meetups, newMeetup]);
});

export { MeetupsAtom, FetchMeetupsAtom, NewMeetupAtom };
