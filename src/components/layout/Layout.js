import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <main className={classes.main}>
      <Outlet />
    </main>
  );
}
