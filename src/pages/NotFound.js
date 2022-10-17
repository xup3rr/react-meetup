import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <h1>Not Found</h1>
      <p>Redirecting to /</p>
    </section>
  );
}
