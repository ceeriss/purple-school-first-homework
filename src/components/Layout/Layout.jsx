export default function Layout() {
	return (
    <div className="flex justify-between mb-[100px]">
      <img src="./logo.png" alt="logo" />
      <nav>
        <ul className="flex gap-[32px] text-white font-[600] text-[16px] leading-[24px] ">
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