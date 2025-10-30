import { useRef, useState } from "react";

export function LoginPage() {
  const [isLogind, setIsLogind] = useState(false);
  const [userName, setUserName] = useState("");
  const NameInput = useRef();

  const handleClick = () => {
    if (!NameInput.current || NameInput.current.value === "") {
      alert("Введите имя");
      return;
    }

    const inputName = NameInput.current.value;

    // Получаем текущие профили из localStorage или пустой массив
    const existingProfiles = JSON.parse(
      localStorage.getItem("profiles") || "[]"
    );

    // Создаем новый массив с добавленным пользователем
    const updatedProfiles = [
      ...existingProfiles,
      {
        name: inputName,
        isLogined: true,
      },
    ];

    // Сохраняем массив объектов в localStorage
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));

    setIsLogind(true);
    setUserName(inputName);
    alert(`Добро пожаловать, ${inputName}!`);
  };

  const handleExitClick = () => {
    setIsLogind(false);
    setUserName("");
    if (NameInput.current) {
      NameInput.current.value = "";
    }
  };

  return (
    <>
      <div className="mt-[20px] flex justify-between">
        <img src="./logo.png" alt="logo" />
        <nav>
          <ul className="flex gap-[32px] text-[16px] font-[600] leading-[24px] text-white">
            <li>
              <a href="#">Поиск фильмов</a>
            </li>
            <li>
              <a href="#">Мои фильмы</a>
            </li>
            <li>{!isLogind ? "Профиль" : userName}</li>
            <li onClick={handleExitClick}>
              <a href="#">{isLogind ? "Выйти" : "Войти"}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-[100px] flex flex-col">
        <h1 className="text-[#EBEEF5] font-[600] text-[64px] leading-[80px]">
          Вход
        </h1>
        <input
          ref={NameInput}
          type="text"
          placeholder="Ваше имя"
          className="w-[384px] h-[64px] border-[1px] border-[#323B54] rounded-[12px] bg-[#101625] text-[#475069] font-[400] text-[14px] leading-[16px] px-[16px] py-[16px] mt-[27px]"
        />
        <button
          onClick={handleClick}
          className="w-[201px] h-[56px] bg-[#7B6EF6] border-[2px] border-[#7B6EF6] rounded-[12px] text-[#ffff] font-[400] text-[16px] leading-[24px] mt-[27px]"
        >
          Войти в профиль
        </button>
      </div>
    </>
  );
}
