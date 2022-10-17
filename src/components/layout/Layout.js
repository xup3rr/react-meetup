
import classes from './Layout.module.css';

export default function Layout({children}) {
  return (
    <div>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
