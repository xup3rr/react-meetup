/* eslint-disable testing-library/no-debugging-utils */
import MeetupItem from "./MeetupItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("MeetupItem", () => {
  let expectProps;

  beforeEach(() => {
    expectProps = {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    };
  });

  test("should render MeetupItem with title (h3), image, address, and description", () => {
    render(<MeetupItem item={expectProps} />);

    const h3 = screen.getByRole("heading", { level: 3 });
    const image = screen.getByAltText(expectProps.title);
    const address = screen.getByText(expectProps.address);
    const description = screen.getByText(expectProps.description);

    expect(image).toBeVisible();
    expect(h3).toBeVisible();
    expect(address).toBeVisible();
    expect(description).toBeVisible();
  });

  test("image src should be correct", () => {
    render(<MeetupItem item={expectProps} />);

    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toBe(expectProps.image);
  });
});
