import layoutStyles from "./layout.module.css";
export default function Layout() {
	return (
    <div className={layoutStyles.layoutDiv}>
      <img src="./logo.png" alt="logo" />
      <nav>
        <ul className={layoutStyles.layout_ul}>
          <li>
            <a href="#">Поиск фильмов</a>
          </li>
          <li>
            <a href="#">Мои фильмы</a>
          </li>
          <li>
            <a href="#">Войти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}