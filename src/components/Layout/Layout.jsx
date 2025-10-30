import { Link } from "react-router-dom";
import layoutStyles from "./layout.module.css";

export default function Layout() {
  const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
  const loggedInUser = profiles.find((profile) => profile.isLogined);

  return (
    <div className={layoutStyles.layoutDiv}>
      <img src="./logo.png" alt="logo" />
      <nav>
        <ul className={layoutStyles.layout_ul}>
          <li>
            <Link to="/">Поиск фильмов</Link>
          </li>
          <li>
            <a href="#">Мои фильмы</a>
          </li>
          <li>{loggedInUser ? loggedInUser.name : "Профиль"}</li>
          <li>
            <Link to="/LoginPage">Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}