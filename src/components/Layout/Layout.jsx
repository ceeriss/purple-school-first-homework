import { Link } from "react-router-dom";
import layoutStyles from "./layout.module.css";

export default function Layout() {
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
          <li>Профиль</li>
          <li>
            <Link to="/LoginPage">Войти</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
