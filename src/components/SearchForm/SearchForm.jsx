import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
export default function SearchForm() {
	const btnText = "Поиск"
	const placeholder = "Введите название";
	return (
    <div className="flex gap-[8px] mt-[24px]">
      <SearchInput
        placeholder={placeholder}
        img={
          <img
            src="public/search.png"
            alt="search"
            className="absolute left-35 top-77"
          />
        }
      />
      <Button btnText={btnText} />
    </div>
  );
}