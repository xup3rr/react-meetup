import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useAtom } from "jotai";
import { NewMeetupAtom } from "../../store/MeetupAtom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function NewMeetupForm() {
  const [, addMeetup] = useAtom(NewMeetupAtom);
  const { register, handleSubmit, reset } = useForm();
  const [formMessage, setFormMessage] = useState("");

  const onSubmit = (data) => {
    addMeetup(data);
    reset();
    setFormMessage("New Meetup added successfully");
  };

  useEffect(() => {
    setTimeout(() => {
      setFormMessage("");
    }, 1500);
  }, [formMessage]);

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            {...register("title", { required: true })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            {...register("image", { required: true })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            {...register("address", { required: true })}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
      {formMessage && <p>{formMessage}</p>}
    </Card>
  );
}
